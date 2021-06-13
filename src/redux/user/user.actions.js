import UserActionTypes from './user.types';

export const setQuery = query => ({
    type: UserActionTypes.SET_QUERY,
    payload: query,
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

export const signInStart = userCredentials => ({
    type: UserActionTypes.SIGN_IN_START,
    payload: userCredentials,
});

export const signInSuccess = currentUser => ({
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload: currentUser,
});

export const signInFailure = error => ({
    type: UserActionTypes.SIGN_IN_FAILURE,
    payload: error,
});

export const signOutStart = () => ({
    type: UserActionTypes.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
    type: UserActionTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = error => ({
    type: UserActionTypes.SIGN_OUT_FAILURE,
    payload: error,
});
