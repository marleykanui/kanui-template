// Redux Toolkit
import { createSlice, PayloadAction, createAction } from "@reduxjs/toolkit";

// Next Redux Wrapper
import { HYDRATE } from "next-redux-wrapper";

// Redux Types
import { AppState } from "../0-store/store";

// Types
interface ReduxExampleSliceProps {
  reduxExample: string;
}

const hydrate = createAction<AppState>(HYDRATE);

const ReduxExampleSlice = createSlice({
  name: "ReduxExample",
  initialState: {
    reduxExample: "Redux Initial State",
  } as ReduxExampleSliceProps,
  reducers: {
    setReduxExample: (state, action: PayloadAction<ReduxExampleSliceProps>) => {
      const { reduxExample } = action.payload;
      state.reduxExample = reduxExample;
    },
  },
  extraReducers(builder) {
    builder.addCase(hydrate, (state, action) => {
      console.log("HYDRATE", state, action.payload);
      return {
        ...state,
        ...action.payload[ReduxExampleSlice.name],
      };
    });
  },
});

export const { setReduxExample } = ReduxExampleSlice.actions;

export default ReduxExampleSlice;
