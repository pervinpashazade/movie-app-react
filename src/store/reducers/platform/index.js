import { createReducer } from '@reduxjs/toolkit';
import { apiStart, apiEnd } from '../../actions/api';

import { setPlatforms } from '../../actions/platform/index';

const initialState = {
    isLoading: false,
    // actionLoading: false,
    // platform: undefined,
    // selectedGenreId: undefined,
    // genreIdId: null,
    platforms: [],
  };

export const platforms = createReducer(initialState, {
    [apiStart]: (state, action) => {
        if (action.payload === 'Platforms') {
            return {
                ...state,
                isLoading: true,
            };
        }

        if (action.payload === 'PlatformsActions') {
            return {
                ...state,
                actionLoading: true,
            };
        }
    },

    [apiEnd]: (state, action) => {
        if (action.payload === 'Platforms') {
            return {
                ...state,
                isLoading: false,
            };
        }

        if (action.payload === 'PlatformsActions') {
            return {
                ...state,
                actionLoading: false,
            };
        }
    },

    [setPlatforms]: (state, action) => ({
        ...state,
        platforms: action.payload.data,
    }),
});