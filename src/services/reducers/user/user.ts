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
} from "../../constants";

// actions
import { TUserActions } from "../../actions/user";

// utils
import { TPreLoginRes, TRegisterRes, TUser } from "../../../utils/types";

type TUserState = {
  data: TRegisterRes | TPreLoginRes;
  refresh: string;
  access: string;
  user: TUser;
  userRequest: boolean;
  userFailed: boolean;
  authRequest: boolean;
  authFailed: boolean;
  loginRequest: boolean;
  loginFailed: boolean;
};

const initialUserState: TUserState = {
  data: {},
  user: {},
  refresh: "",
  access: "",
  userRequest: false,
  userFailed: false,
  authRequest: false,
  authFailed: false,
  loginRequest: false,
  loginFailed: false,
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
        data: action,
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
        data: action,
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
        data: action,
        loginRequest: false,
      };
    }
    case LOGIN_FAILED: {
      return { ...state, loginFailed: true };
    }

    default: {
      return state;
    }
  }
};
