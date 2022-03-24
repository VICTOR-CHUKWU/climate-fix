import axios from 'axios';

const baseUrl = 'http://localhost:3001';
const initialState = {
  name: '',
  email: '',
  loggedIn: 'out',
  userId: '',
  signedUp: false,
};

// Constants
const SIGN_UP = 'lease_a_home/SIGN_UP';
const LOGIN = 'lease_a_home/LOGIN';
const LOGOUT = 'lease_a_home/LOGOUT';

// Action Creators
export const signUp = (payload) => ({
  type: SIGN_UP,
  payload,
});

export const login = (payload) => ({
  type: LOGIN,
  payload,
});

export const logout = (payload) => ({
  type: LOGOUT,
  payload,
});

// Reducesrs
export const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SIGN_UP:
      return {
        ...payload,
      };
    case LOGIN:
      return payload;
    case LOGOUT:
      return payload;
    default:
      return state;
  }
};

const hitAPIWithSignupDetails = (details) => async (dispatch) => {
  const { name, email } = details;
  try {
    await axios({
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      url: `${baseUrl}/users`,
      user: {
        name,
        email,
        paswword: '1234567',
      },
    });

    dispatch(
      signUp({
        name: '',
        email: '',
        loggedIn: false,
        userId: '',
        signedUp: 'up',
      }),
    );
  } catch (error) {
    dispatch(
      signUp({
        name: '',
        email: '',
        loggedIn: false,
        userId: '',
        signedUp: 'err',
      }),
    );
  }
};

export const hitAPIWithSigninDetails = (details) => async (dispatch) => {
  const { email, name } = details;
  try {
    const signUpRespons = await axios({
      method: 'post',
      url: `${baseUrl}/users/sign_in`,
      user: {
        email,
        name,
        paswword: '1234567',
      },
    });

    const { data, headers } = signUpRespons;
    const { user } = data;
    const { authorization } = headers;

    const mainUser = {
      name: user.name,
      email: user.email,
      loggedIn: 'in',
      userId: user.id,
      signedUp: true,
    };

    const loginData = {
      timestamp: new Date().getTime(),
      authorization,
      mainUser,
    };

    localStorage.setItem('someRandomVitalData', JSON.stringify(loginData));

    dispatch(signUp(mainUser));
  } catch (error) {
    dispatch(
      signUp({
        name: '',
        email: '',
        loggedIn: 'err',
        userId: '',
        signedUp: false,
      }),
    );
  }
};

export const hitAPIWithLogoutDetails = (details) => async (dispatch) => {
  const { userAuth } = details;
  try {
    await fetch(
      `${process.env.REACT_APP_LOGOUT_ENDPOINT}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${userAuth}`,
        },
      },
    );

    dispatch(logout({
      ...initialState,
      loggedIn: 'out',
      signedUp: false,
    }));

    localStorage.removeItem('someRandomVitalData');
  } catch (error) {
    dispatch(
      logout({
        name: '',
        email: '',
        loggedIn: 'err',
        userId: '',
        signedUp: false,
      }),
    );
  }
};

export default hitAPIWithSignupDetails;
