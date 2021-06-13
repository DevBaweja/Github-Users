import axios from 'axios';
import { takeLatest, put, all, call, select } from 'redux-saga/effects';
import UserActionTypes from './user.types';
import { searchUsersSuccess, searchUsersFailure } from './user.actions';
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

export function* userSagas() {
    yield all([call(onSearchUsersStart)]);
}
