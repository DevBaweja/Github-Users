import axios from 'axios';
import { takeLatest, put, all, call, select } from 'redux-saga/effects';
import UserActionTypes from './user.types';
import { searchUsersSuccess, searchUsersFailure, getShowUserSuccess, getShowUserFailure } from './user.actions';
import { selectQuery } from './user.selector';
import urls from '../variables';

export function* searchUsers() {
    const query = yield select(selectQuery);
    try {
        const response = yield call(() =>
            axios({
                method: 'GET',
                url: `${urls.api}/search/users?q=${query}`,
            })
        );
        yield put(searchUsersSuccess(response.data.items));
    } catch (error) {
        yield put(searchUsersFailure(error));
    }
}

export function* onSearchUsersStart() {
    yield takeLatest(UserActionTypes.SEARCH_USERS_START, searchUsers);
}

export function* getUser(action) {
    const username = action.payload;
    try {
        const response = yield call(() =>
            axios({
                method: 'GET',
                url: `${urls.api}/users/${username}`,
            })
        );
        yield put(getShowUserSuccess(response.data));
    } catch (error) {
        yield put(getShowUserFailure(error));
    }
}

export function* onGetUserStart() {
    yield takeLatest(UserActionTypes.GET_SHOW_USER_START, getUser);
}

export function* userSagas() {
    yield all([call(onSearchUsersStart), call(onGetUserStart)]);
}
