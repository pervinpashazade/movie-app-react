/**
 * axios config using axios.interceptors(doc. https://github.com/axios/axios#interceptors)
 */

import axios from 'axios';
// import { cookies } from 'utils/cookies';
import { cookies } from '../utils/cookies';

let requestUrl = '';

const nonAuthRequiredUrls = [
    '/login',
    '/register',
    '/recovery',
    '/password/recovery',
    '/invitation',
    '/invitation/accept',
];

// add base url to all requests and token if this available,
// on response with status code 401 dispatch logout action to store
export const httpService = () => {
    // request config
    axios.interceptors.request.use(
        config => {
            config.baseURL =
                process.env.NODE_ENV === 'production'
                    ? process.env.REACT_APP_API_URL
                    : process.env.REACT_APP_DEV_API_URL;

            requestUrl = config.url;

            const token = cookies.get('_TKN_');
            const tenantId = cookies.get('__TNT__');

            if (token && tenantId && !nonAuthRequiredUrls.includes(requestUrl)) {
                config.headers['X-AUTH-PROTOKEN'] = token;
                config.headers['X-TENANT-ID'] = tenantId;
            }

            return config;
        },
        error => Promise.reject(error)
    );
    // // response config
    // // axios.interceptors.response.use(
    // //   response => response,
    // //   error => {
    // //     // if (
    // //     //   error?.response?.status === 401 &&
    // //     //   !nonAuthRequiredUrls.includes(requestUrl)
    // //     // ) {
    // //     //   resetUserDetails();

    // //     //   setTimeout(() => {
    // //     //     window.location.replace('/login');
    // //     //   }, 0);
    // //     //   return;
    // //     // }
    // //     return Promise.reject(error);
    // //   }
    // // );
};
