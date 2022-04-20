// constants
import {
  SET_VERIFY_FAILED,
  SET_VERIFY_REQUEST,
  SET_VERIFY_SUCCESS,
} from "../constants";

// utils
import { AppDispatch, AppThunk } from "../../utils/types";

// api
import { verifyRequest } from "../api";

export interface ISetVerifyAction {
  readonly type: typeof SET_VERIFY_REQUEST;
}

export interface ISetVerifyFailedAction {
  readonly type: typeof SET_VERIFY_FAILED;
}

export interface ISetVerifySuccessAction {
  readonly type: typeof SET_VERIFY_SUCCESS;
  readonly key: string;
}

export type TVerifyActions =
  | ISetVerifyAction
  | ISetVerifyFailedAction
  | ISetVerifySuccessAction;

export const setVerifyAction = (): ISetVerifyAction => ({
  type: SET_VERIFY_REQUEST,
});

export const setVerifyFailedAction = (): ISetVerifyFailedAction => ({
  type: SET_VERIFY_FAILED,
});

export const setVerifySuccessAction = (
  key: string
): ISetVerifySuccessAction => ({
  type: SET_VERIFY_SUCCESS,
  key,
});

export const verify: AppThunk = (key: string) => {
  return function (dispatch: AppDispatch) {
    dispatch(setVerifyAction());
    verifyRequest(key)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          dispatch(setVerifyFailedAction());
        }
        return Promise.reject(res.status);
      })
      .then((data) => {
        dispatch(setVerifySuccessAction(data));
      })
      .catch((err) => {
        dispatch(setVerifyFailedAction());
        alert(`При выполнении запроса произощла ошибка: ${err.message}`);
      });
  };
};
