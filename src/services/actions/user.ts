// constants
import {
  SET_USER_FAILED, SET_USER_REQUEST, SET_USER_SUCCESS, AUTHORIZE_FAILED, AUTHORIZE_REQUEST, AUTHORIZE_SUCCESS,
} from "../constants";

// utils
import {AppDispatch, AppThunk, TUser} from "../../utils/types";

// api
import {
  registerRequest, authorizeRequest,
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

export interface IAuthorizeAction {
  readonly type: typeof AUTHORIZE_REQUEST;
}

export interface IAuthorizeFailedAction {
  readonly type: typeof AUTHORIZE_FAILED;
}

export interface IAuthorizeSuccessAction {
  readonly type: typeof AUTHORIZE_SUCCESS;
  readonly user: TUser;
}

export type TUserActions =
  ISetUserAction
  | ISetUserFailedAction
  | ISetUserSuccessAction
  | IAuthorizeAction
  | IAuthorizeFailedAction
  | IAuthorizeSuccessAction;

export const setUserAction = (): ISetUserAction => ({
  type: SET_USER_REQUEST
});

export const setUserFailedAction = (): ISetUserFailedAction => ({
  type: SET_USER_FAILED
});

export const setUserSuccessAction = (user: TUser): ISetUserSuccessAction => ({
  type: SET_USER_SUCCESS, user
});

export const authorizeAction = (): IAuthorizeAction => ({
  type: AUTHORIZE_REQUEST
});

export const authorizeFailedAction = (): IAuthorizeFailedAction => ({
  type: AUTHORIZE_FAILED
});

export const authorizeSuccessAction = (user: TUser): IAuthorizeSuccessAction => ({
  type: AUTHORIZE_SUCCESS,
  user
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

export const authorize: AppThunk = (data) => {
  return function (dispatch: AppDispatch) {
    dispatch(authorizeAction());
    authorizeRequest(data)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          dispatch(authorizeFailedAction());
        }
        return Promise.reject(res.status);
      })
      .then((data) => {
          dispatch(authorizeSuccessAction(data));
      })
      .catch((err) => {
        authorizeFailedAction();
        console.log(err)
      });
  };
}

