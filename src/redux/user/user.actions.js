import { UserActionTypes } from './user.types';

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER, // STRING HAS TO BE SAME AS IN user.reducer.js
    payload: user 
});