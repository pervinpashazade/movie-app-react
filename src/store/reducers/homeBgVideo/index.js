import { createReducer } from '@reduxjs/toolkit';
import { apiStart, apiEnd } from '../../actions/api';

import { setHomeBgVideo } from '../../actions/homeBgVideo/index';

const initialState = {
    // isLoading: false,
    // actionLoading: false,
    // genre: undefined,
    // selectedGenreId: undefined,
    // genreIdId: null,
    homeBgVideoData: [],
};

export const homeBgVideo = createReducer(initialState, {
    [apiStart]: (state, action) => {
        if (action.payload === 'HomeBgVideo') {
            return {
                ...state,
                isLoading: true,
            };
        }

        if (action.payload === 'HomeBgVideoActions') {
            return {
                ...state,
                actionLoading: true,
            };
        }
    },

    [apiEnd]: (state, action) => {
        if (action.payload === 'HomeBgVideo') {
            return {
                ...state,
                isLoading: false,
            };
        }

        if (action.payload === 'HomeBgVideoActions') {
            return {
                ...state,
                actionLoading: false,
            };
        }
    },

    [setHomeBgVideo]: (state, action) => ({
        ...state,
        homeBgVideoData: action.payload.data,
    }),
});