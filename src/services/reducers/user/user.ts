// constants
import {
  SET_USER_FAILED, SET_USER_REQUEST, SET_USER_SUCCESS,
} from "../../constants";

// actions
import {TUserActions} from "../../actions/user";

// utils
import {TRegisterRes, TUser} from "../../../utils/types";


type TUserState = {
  data: TRegisterRes, user: TUser, userRequest: boolean, userFailed: boolean,

}

const initialUserState: TUserState = {
  data: {}, user: {}, userRequest: false, userFailed: false,
};

export const userReducer = (state = initialUserState, action: TUserActions) => {
  switch (action.type) {
    case SET_USER_REQUEST: {
      return {
        ...state, userRequest: true,
      };
    }
    case SET_USER_SUCCESS: {
      return {
        ...state, data: action, userRequest: false,
      };
    }
    case SET_USER_FAILED: {
      return {...state, userFailed: true};
    }
    default: {
      return state;
    }
  }
};
