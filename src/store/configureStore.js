import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import logger from "./middleware/logger";
import modal from "./modal";
import contador from "./contador";
import login from "./login";

const middleware = [...getDefaultMiddleware(), logger];

const reducer = combineReducers({ contador, modal, login });
const store = configureStore({ reducer, middleware });

export default store;
