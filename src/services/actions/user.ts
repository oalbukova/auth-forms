// constants
import {
  AUTHORIZE_FAILED,
  AUTHORIZE_REQUEST,
  AUTHORIZE_SUCCESS,
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SET_USER_FAILED,
  SET_USER_REQUEST,
  SET_USER_SUCCESS,
  DELETE_USER_FAILED,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
} from "../constants";

// utils
import {
  AppDispatch,
  AppThunk,
  TResponse,
  TLoginRes,
  TUser,
} from "../../utils/types";

// api
import {
  authorizeRequest,
  loginRequest,
  registerRequest,
  deleteUserRequest,
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
  readonly preLoginRes: TResponse;
}

export interface ILoginAction {
  readonly type: typeof LOGIN_REQUEST;
}

export interface ILoginFailedAction {
  readonly type: typeof LOGIN_FAILED;
}

export interface ILoginSuccessAction {
  readonly type: typeof LOGIN_SUCCESS;
  readonly token: TLoginRes;
}

export interface IDeleteUserAction {
  readonly type: typeof DELETE_USER_REQUEST;
}

export interface IDeleteUserFailedAction {
  readonly type: typeof DELETE_USER_FAILED;
}

export interface IDeleteUserSuccessAction {
  readonly type: typeof DELETE_USER_SUCCESS;
  readonly deleteRes: TResponse;
}

export type TUserActions =
  | ISetUserAction
  | ISetUserFailedAction
  | ISetUserSuccessAction
  | IAuthorizeAction
  | IAuthorizeFailedAction
  | IAuthorizeSuccessAction
  | ILoginAction
  | ILoginFailedAction
  | ILoginSuccessAction
  | IDeleteUserAction
  | IDeleteUserFailedAction
  | IDeleteUserSuccessAction;

export const setUserAction = (): ISetUserAction => ({
  type: SET_USER_REQUEST,
});

export const setUserFailedAction = (): ISetUserFailedAction => ({
  type: SET_USER_FAILED,
});

export const setUserSuccessAction = (user: TUser): ISetUserSuccessAction => ({
  type: SET_USER_SUCCESS,
  user,
});

export const authorizeAction = (): IAuthorizeAction => ({
  type: AUTHORIZE_REQUEST,
});

export const authorizeFailedAction = (): IAuthorizeFailedAction => ({
  type: AUTHORIZE_FAILED,
});

export const authorizeSuccessAction = (
  preLoginRes: TResponse
): IAuthorizeSuccessAction => ({
  type: AUTHORIZE_SUCCESS,
  preLoginRes,
});

export const loginAction = (): ILoginAction => ({
  type: LOGIN_REQUEST,
});

export const loginFailedAction = (): ILoginFailedAction => ({
  type: LOGIN_FAILED,
});

export const loginSuccessAction = (token: TLoginRes): ILoginSuccessAction => ({
  type: LOGIN_SUCCESS,
  token,
});

export const deleteUserAction = (): IDeleteUserAction => ({
  type: DELETE_USER_REQUEST,
});

export const deleteUserFailedAction = (): IDeleteUserFailedAction => ({
  type: DELETE_USER_FAILED,
});

export const deleteUserSuccessAction = (
  deleteRes: TResponse
): IDeleteUserSuccessAction => ({
  type: DELETE_USER_SUCCESS,
  deleteRes,
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
        console.log(data);
        dispatch(setUserSuccessAction(data));
      })
      .catch((err) => {
        dispatch(setUserFailedAction());
        alert(`При выполнении запроса произощла ошибка: ${err}`);
      });
  };
};

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
        dispatch(authorizeFailedAction());
        alert(`При выполнении запроса произощла ошибка: ${err}`);
      });
  };
};

export const login: AppThunk = (data) => {
  return function (dispatch: AppDispatch) {
    loginRequest(data)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          dispatch(loginFailedAction());
        }
        return Promise.reject(res.status);
      })
      .then((data) => {
        dispatch(loginSuccessAction(data));
      })
      .catch((err) => {
        dispatch(loginFailedAction());
        alert(`При выполнении запроса произощла ошибка: ${err}`);
      });
  };
};

export const deleteUser: AppThunk = (token: string | null) => {
  return function (dispatch: AppDispatch) {
    dispatch(deleteUserAction());
    deleteUserRequest(token)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          dispatch(deleteUserFailedAction());
        }
        return Promise.reject(res.status);
      })
      .then((data) => {
        if (data.success) {
          dispatch(deleteUserSuccessAction(data));
        }
      })
      .catch((err) => {
        dispatch(deleteUserFailedAction());
        alert(`При выполнении запроса произощла ошибка: ${err}`);
      });
  };
};
