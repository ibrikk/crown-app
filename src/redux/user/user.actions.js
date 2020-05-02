export const setCurrentUser = user => ({
    type: 'SET_CURRENT_USER', // STRING HAS TO BE SAME AS IN user.reducer.js
    payload: user 
});