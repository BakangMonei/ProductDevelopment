// authActions.js
import { auth } from '../../firebase'; // Import your Firebase configuration here
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';


// FORGOTPASSWORD
export const SEND_PASSWORD_RESET_EMAIL_REQUEST = 'SEND_PASSWORD_RESET_EMAIL_REQUEST';
export const SEND_PASSWORD_RESET_EMAIL_SUCCESS = 'SEND_PASSWORD_RESET_EMAIL_SUCCESS';
export const SEND_PASSWORD_RESET_EMAIL_FAILURE = 'SEND_PASSWORD_RESET_EMAIL_FAILURE';

// Action Creators
export const sendPasswordResetEmailRequest = () => ({
  type: SEND_PASSWORD_RESET_EMAIL_REQUEST
});

export const sendPasswordResetEmailSuccess = () => ({
  type: SEND_PASSWORD_RESET_EMAIL_SUCCESS
});

export const sendPasswordResetEmailFailure = (error) => ({
  type: SEND_PASSWORD_RESET_EMAIL_FAILURE,
  error
});

// Thunk Action Creator
export const sendPasswordResetEmail = (email) => {
  return (dispatch) => {
    dispatch(sendPasswordResetEmailRequest());
    auth.sendPasswordResetEmail(email)
      .then(() => {
        dispatch(sendPasswordResetEmailSuccess());
      })
      .catch((error) => {
        dispatch(sendPasswordResetEmailFailure(error));
      });
  };
};


// LOGIN
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

// Action creators
export const login = (email, password) => async (dispatch) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      dispatch({ type: LOGIN_SUCCESS });
    } catch (error) {
      dispatch({ type: LOGIN_FAILURE, payload: error.message });
    }
  };
  
  export const logout = () => async (dispatch) => {
    try {
      await signOut(auth);
      dispatch({ type: LOGOUT_SUCCESS });
    } catch (error) {
      console.error('Logout error:', error);
    }
  };