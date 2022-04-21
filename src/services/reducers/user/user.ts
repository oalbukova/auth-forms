// constants
import {
  SET_USER_FAILED,
  SET_USER_REQUEST,
  SET_USER_SUCCESS,
  AUTHORIZE_FAILED,
  AUTHORIZE_REQUEST,
  AUTHORIZE_SUCCESS,
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  DELETE_USER_FAILED,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
} from "../../constants";

// actions
import { TUserActions } from "../../actions/user";

// utils
import { TLoginRes, TResponse, TRegisterRes } from "../../../utils/types";

type TUserState = {
  user: TRegisterRes;
  preLoginRes: TResponse;
  token: TLoginRes;
  userRequest: boolean;
  userFailed: boolean;
  authRequest: boolean;
  authFailed: boolean;
  loginRequest: boolean;
  loginFailed: boolean;
  deleteUserRequest: boolean;
  deleteUserFailed: boolean;
};

const initialUserState: TUserState = {
  preLoginRes: {},
  user: {},
  token: {},
  userRequest: false,
  userFailed: false,
  authRequest: false,
  authFailed: false,
  loginRequest: false,
  loginFailed: false,
  deleteUserRequest: false,
  deleteUserFailed: false,
};

export const userReducer = (state = initialUserState, action: TUserActions) => {
  switch (action.type) {
    case SET_USER_REQUEST: {
      return {
        ...state,
        userRequest: true,
      };
    }
    case SET_USER_SUCCESS: {
      return {
        ...state,
        user: action.user,
        userRequest: false,
      };
    }
    case SET_USER_FAILED: {
      return { ...state, userFailed: true };
    }
    case AUTHORIZE_REQUEST: {
      return {
        ...state,
        authRequest: true,
      };
    }
    case AUTHORIZE_SUCCESS: {
      return {
        ...state,
        preLoginRes: action.preLoginRes,
        authRequest: false,
      };
    }
    case AUTHORIZE_FAILED: {
      return { ...state, authFailed: true };
    }
    case LOGIN_REQUEST: {
      return {
        ...state,
        loginRequest: true,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        token: action.token,
        loginRequest: false,
      };
    }
    case LOGIN_FAILED: {
      return { ...state, loginFailed: true };
    }
    case DELETE_USER_REQUEST: {
      return {
        ...state,
        deleteUserRequest: true,
      };
    }
    case DELETE_USER_SUCCESS: {
      return {
        ...state,
        deleteUserFailed: false,
        token: {},
        deleteUserRequest: false,
      };
    }
    case DELETE_USER_FAILED: {
      return { ...state, deleteUserFailed: true, deleteUserRequest: false };
    }

    default: {
      return state;
    }
  }
};
