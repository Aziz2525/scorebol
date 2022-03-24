import { combineReducers } from "redux";
import {allFiksturReducer} from "./fiksturReducers";

const reducer = combineReducers({
    allFikstur: allFiksturReducer
})

export default reducer;