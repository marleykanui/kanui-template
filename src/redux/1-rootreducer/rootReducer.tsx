// Redux Toolkit
import { combineReducers } from "redux";

// Reducers
import ReduxExampleSlice from "../2-slices/ReduxExampleSlice";

const rootReducer = combineReducers({
  [ReduxExampleSlice.name]: ReduxExampleSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
