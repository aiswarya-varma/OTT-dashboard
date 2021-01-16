/**
 * Redux store
 */

import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducer.js";
import thunk from 'redux-thunk';

export default createStore(rootReducer, applyMiddleware(thunk));