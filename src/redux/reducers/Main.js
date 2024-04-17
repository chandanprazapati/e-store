import { combineReducers } from "redux";
import { cardreducer } from "./Reducer";

const rootreducer = combineReducers({
  cardreducer,
});
export default rootreducer;
