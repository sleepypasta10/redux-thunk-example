import { combineReducers, createStore } from "redux";
import { applyMiddleware } from "redux";
import logger from 'redux-logger';
import usersRdc from "./redux/reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(usersRdc, composeWithDevTools(applyMiddleware(thunk)));