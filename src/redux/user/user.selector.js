import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(selectUser, user => user.currentUser);

export const selectShowUser = createSelector(selectUser, user => user.showUser);

export const selectAllUsers = createSelector(selectUser, user => user.allUsers);

export const selectLoading = createSelector(selectUser, user => user.loading);

export const selectErrpr = createSelector(selectUser, user => user.error);

export const selectQuery = createSelector(selectUser, user => user.query);

export const selectTab = createSelector(selectUser, user => user.tab);
