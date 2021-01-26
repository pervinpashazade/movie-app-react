import {
    configureStore,
    combineReducers,
    getDefaultMiddleware,
} from '@reduxjs/toolkit';
import apiMiddleware from './middleware/api';

// reducers
import { genres } from './reducers/genre';

const appReducer = combineReducers({
    genres,
});

const rootReducer = (state, action) => {
    if (action.type === 'LOGOUT') {
        return undefined;
    }
    return appReducer(state, action);
};

export default function configureAppStore() {
    const store = configureStore({
        reducer: rootReducer,
        middleware: [...getDefaultMiddleware(), apiMiddleware],
    });
    return store;
}