import { createReducer } from '@reduxjs/toolkit';
import { apiStart, apiEnd } from '../../actions/api';

import { setGenres } from '../../actions/genre/index';

const initialState = {
    isLoading: false,
    // actionLoading: false,
    // genre: undefined,
    // selectedGenreId: undefined,
    // genreIdId: null,
    genres: [],
  };

export const genres = createReducer(initialState, {
    [apiStart]: (state, action) => {
        if (action.payload === 'Genres') {
            return {
                ...state,
                isLoading: true,
            };
        }

        if (action.payload === 'GenresActions') {
            return {
                ...state,
                actionLoading: true,
            };
        }
    },

    [apiEnd]: (state, action) => {
        if (action.payload === 'Genres') {
            return {
                ...state,
                isLoading: false,
            };
        }

        if (action.payload === 'GenresActions') {
            return {
                ...state,
                actionLoading: false,
            };
        }
    },

    [setGenres]: (state, action) => ({
        ...state,
        genres: action.payload.data,
    }),
});