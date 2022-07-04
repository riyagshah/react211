// TODO: use this store variable to create a store.


import { legacy_createStore } from "redux";
import {reducer as Todoreducer} from "./reducer"


export const store =legacy_createStore(Todoreducer);;

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
