import { combineReducers } from "redux";
import { alert } from "./alert.reducer";
import { items, itemDetails, itemCreators } from "./items.reducer";

const rootReducer = combineReducers({
  alert,
  items,
  itemDetails,
  itemCreators,
});

export default rootReducer;
