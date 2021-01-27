import { createAction } from '@reduxjs/toolkit';
import { apiAction } from '../index';
import { API_URL } from '../../constants'

export const setHomeBgVideo = createAction('setHomeBgVideo');

export function fetchHomeBgVideo() {
    return apiAction({
        url: `${API_URL}/home-page-video`,
        onSuccess: setHomeBgVideo,
        // onSuccess: {},
        label: 'HomeBgVideo',
    });
}