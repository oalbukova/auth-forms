// redux
import {combineReducers} from "redux";

// reducers
import {userReducer} from "./user/user";


export const rootReducer = combineReducers({
  userReducer,
});
