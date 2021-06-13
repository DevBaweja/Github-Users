import UserActionTypes from './user.types';

export const setQuery = query => ({
    type: UserActionTypes.SET_QUERY,
    payload: query,
});

export const setTab = tab => ({
    type: UserActionTypes.SET_TAB,
    payload: tab,
});

export const getShowUserStart = username => ({
    type: UserActionTypes.GET_SHOW_USER_START,
    payload: username,
});

export const getShowUserSuccess = showUser => ({
    type: UserActionTypes.GET_SHOW_USER_SUCCESS,
    payload: showUser,
});

export const getShowUserFailure = error => ({
    type: UserActionTypes.GET_SHOW_USER_FAILURE,
    payload: error,
});

export const searchUsersStart = () => ({
    type: UserActionTypes.SEARCH_USERS_START,
});

export const searchUsersSuccess = allUsers => ({
    type: UserActionTypes.SEARCH_USERS_SUCCESS,
    payload: allUsers,
});

export const searchUsersFailure = error => ({
    type: UserActionTypes.SEARCH_USERS_FAILURE,
    payload: error,
});

export const checkUserSession = () => ({
    type: UserActionTypes.CHECK_USER_SESSION,
});

export const logInStart = userCredentials => ({
    type: UserActionTypes.LOG_IN_START,
    payload: userCredentials,
});

export const logInSuccess = currentUser => ({
    type: UserActionTypes.LOG_IN_SUCCESS,
    payload: currentUser,
});

export const logInFailure = error => ({
    type: UserActionTypes.LOG_IN_FAILURE,
    payload: error,
});

export const logOutStart = () => ({
    type: UserActionTypes.LOG_OUT_START,
});

export const logOutSuccess = () => ({
    type: UserActionTypes.LOG_OUT_SUCCESS,
});

export const logOutFailure = error => ({
    type: UserActionTypes.LOG_OUT_FAILURE,
    payload: error,
});
