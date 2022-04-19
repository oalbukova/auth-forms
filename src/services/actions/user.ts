// constants
import {
  SET_USER_FAILED, SET_USER_REQUEST, SET_USER_SUCCESS,
} from "../constants";

// utils
import {AppDispatch, AppThunk, TUser} from "../../utils/types";

// api
import {
  registerRequest,
} from "../api";


export interface ISetUserAction {
  readonly type: typeof SET_USER_REQUEST;
}

export interface ISetUserFailedAction {
  readonly type: typeof SET_USER_FAILED;
}

export interface ISetUserSuccessAction {
  readonly type: typeof SET_USER_SUCCESS;
  readonly user: TUser;
}

export type TUserActions = ISetUserAction | ISetUserFailedAction | ISetUserSuccessAction;

export const setUserAction = (): ISetUserAction => ({
  type: SET_USER_REQUEST
});

export const setUserFailedAction = (): ISetUserFailedAction => ({
  type: SET_USER_FAILED
});

export const setUserSuccessAction = (user: TUser): ISetUserSuccessAction => ({
  type: SET_USER_SUCCESS, user
});

export const register: AppThunk = (data) => {
  return function (dispatch: AppDispatch) {
    dispatch(setUserAction());
    registerRequest(data)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          dispatch(setUserFailedAction());
        }
        return Promise.reject(res.status);
      })
      .then((data) => {
        dispatch(setUserSuccessAction(data));
      })
      .catch((err) => {
        dispatch(setUserFailedAction());
        console.log(err);
      });
  };
}

