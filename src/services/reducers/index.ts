// redux
import { combineReducers } from "redux";

// reducers
import { userReducer } from "./user/user";
import { verifyReducer } from "./verify/verify";

export const rootReducer = combineReducers({
  userReducer,
  verifyReducer,
});
