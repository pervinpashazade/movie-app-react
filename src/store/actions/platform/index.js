import { createAction } from '@reduxjs/toolkit';
import { apiAction } from '../index';
import { API_URL } from '../../constants'

export const setPlatforms = createAction('setPlatforms');

export function fetchPlatforms() {
    return apiAction({
        url: `${API_URL}/platforms`,
        onSuccess: setPlatforms,
        // onSuccess: {},
        label: 'Platforms',
    });
}