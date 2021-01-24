import { messages } from './messages';

export function apiErrorMessageResolver(error) {
  let errorMessage = messages.errorText;

  if (
    error &&
    error.response &&
    error.response.data &&
    error.response.data.error &&
    error.response.data.error.message
  ) {
    errorMessage = error.response.data.error.message;
  }

  if (error.response && error.response.status > 499) {
    return 'Server Error';
  }
  return errorMessage;
}
