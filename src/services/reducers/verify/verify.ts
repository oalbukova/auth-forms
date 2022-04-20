// constants
import {
  SET_VERIFY_FAILED,
  SET_VERIFY_REQUEST,
  SET_VERIFY_SUCCESS,
} from "../../constants";

// actions
import { TVerifyActions } from "../../actions/verify";

type TVerifyState = {
  key: string;
  verifyRequest: boolean;
  verifyFailed: boolean;
};

const initialVerifyState: TVerifyState = {
  key: "",
  verifyRequest: false,
  verifyFailed: false,
};

export const verifyReducer = (
  state = initialVerifyState,
  action: TVerifyActions
) => {
  switch (action.type) {
    case SET_VERIFY_REQUEST: {
      return {
        ...state,
        verifyRequest: true,
      };
    }
    case SET_VERIFY_SUCCESS: {
      return {
        ...state,
        key: action,
        verifyRequest: false,
      };
    }
    case SET_VERIFY_FAILED: {
      return { ...state, verifyFailed: true };
    }
    default: {
      return state;
    }
  }
};
