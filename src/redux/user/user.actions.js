import UserActionTypes from './user.types';

export const checkUserSession = () => ({
    type: UserActionTypes.CHECK_USER_SESSION,
});

export const signInStart = userCredentials => ({
    type: UserActionTypes.SIGN_IN_START,
    payload: userCredentials,
});

export const signInSuccess = cuurentUser => ({
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload: cuurentUser,
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

export const searchUsersStart = () => ({
    type: UserActionTypes.SEARCH_USERS_START,
});
