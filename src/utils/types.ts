// redux
import {ThunkAction} from "redux-thunk";
import {Action, ActionCreator, Dispatch} from "redux";

// services
import {store} from "../services/store";
import {TUserActions} from "../services/actions/user";


type TApplicationActions = TUserActions;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = Dispatch<TApplicationActions>;
export type AppThunk<ReturnType = void> = ActionCreator<ThunkAction<ReturnType, Action, RootState, TApplicationActions>>;

export interface IFormTextInputProps {
  name: string
  label: string
  type: string
}

export type TRegisterRes = {
  username?: string; email?: string;
};

export type TUser = {
  id?: string; username?: string; email?: string; password1?: string; password2?: string; keyword?:	string;
};

