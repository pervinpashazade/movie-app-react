import { createAction } from '@reduxjs/toolkit';
import { apiAction } from '../index';
import { API_URL } from '../../constants'

export const setGenres = createAction('setGenres');

// export function fetchGenres({ attribute } = {}) {
//     return apiAction({
//         url: `/sales/expense/catalogs`,
//         onSuccess: setExpenseCatalogs,
//         attribute,
//         label: 'expenseCatalog',
//     });
// }

export function fetchGenres() {
    return apiAction({
        // url: `/api/all-genres/`,
        // url: `http://127.0.0.1:8000/api/all-genres/`,
        url: `${API_URL}/genres`,
        onSuccess: setGenres,
        // onSuccess: {},
        label: 'Genres',
    });
}