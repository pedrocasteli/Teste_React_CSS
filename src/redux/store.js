import { createStore, combineReducers } from "redux";
import listaReducer from "./Lista/reducer";

const rootReducer = combineReducers({ listaReducer });

const store = createStore(rootReducer);

export default store;
