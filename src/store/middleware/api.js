
import axios from 'axios';
// import { API } from 'store/constants';
import { toast } from 'react-toastify';

//copied!!!
import { showLoader, hideLoader } from '../../utils/loadingIconControl';
// import { apiStart, apiEnd, apiError, accessDenied } from 'store/actions/api';
import { apiStart, apiEnd, apiError, accessDenied } from '../actions/api';
import { messages, apiErrorMessageResolver } from '../../utils';
import errorMessages from '../../utils/errors';

//// TO Do
//// const { CancelToken } = axios;
//// export const { token, cancel } = CancelToken.source();

const apiMiddleware = ({ dispatch, getState }) => next => action => {

    const API = 'API';

    if (action && action.type) {
        if (action?.type !== API) {
            next(action);
            return;
        }

        const {
            url,
            method,
            data,
            onSuccess,
            onFailure,
            label,
            showLoading,
            showToast,
            attribute,
            shouldCallApi,
            showErrorToast,
        } = action.payload;

        if (!shouldCallApi(getState())) return;

        if (showLoading) {
            showLoader();
        }

        if (label) {
            dispatch(apiStart(label));
        }

        const dataOrParams = ['GET'].includes(method) ? 'params' : 'data';

        axios
            .request({
                url,
                method,
                //// cancelToken: token,
                [dataOrParams]: data,
            })
            .then(response => {
                dispatch(
                    onSuccess({
                        ...response?.data,
                        data: response?.data?.data,
                        attribute,
                    })
                );

                if (showToast) {
                    toast.success(messages.successText, {
                        className: 'success-toast',
                    });
                }
            })
            .catch(error => {
                if (axios.isCancel(error)) return;

                let errorMessage = apiErrorMessageResolver(error);
                const errorKey = error?.response?.data?.error?.messageKey;
                if (errorKey && errorMessages[errorKey]) {
                    errorMessage = errorMessages[errorKey];
                }

                dispatch(apiError({ message: errorMessage, attribute }));

                if (error?.response?.status === 403) {
                    return;
                }

                if (showErrorToast && error?.response?.status !== 403) {
                    toast.error(errorMessage);
                }

                if (error.response && error.response.status === 403) {
                    dispatch(accessDenied(window.location.pathname));
                }

                if (onFailure) {
                    dispatch(onFailure({ error, attribute }));
                }
            })
            .finally(() => {
                if (showLoading) {
                    hideLoader();
                }
                if (label) {
                    dispatch(apiEnd(label));
                }
            });
    }
};

export default apiMiddleware;
