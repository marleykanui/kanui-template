// React
import { useState } from "react";

// React Redux
import { useSelector, useDispatch } from "react-redux";

// Redux Actions
import { setReduxExample } from "@/redux/2-slices/ReduxExampleSlice";

// Redux Types
import { AppState } from "@/redux/0-store/store";

// React Types
import { FC, SyntheticEvent } from "react";

const ReduxExample: FC = () => {
  // Local State
  const [value, setValue] = useState<string>("");
  const [reduxChanged, setReduxChanged] = useState(false);

  // Global State
  const {
    ReduxExample: { reduxExample },
  } = useSelector<AppState, AppState>((state) => state);

  // State Dispatch
  const dispatch = useDispatch();

  const handleDispatch = (e: SyntheticEvent) => {
    e.preventDefault();
    if (value !== "") {
      dispatch(setReduxExample({ reduxExample: value }));
      setReduxChanged(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleDispatch}>
        <label htmlFor="ReduxExample" />
        <input
          type="text"
          name="reduxExample"
          placeholder="Redux Example"
          value={value}
          onChange={(e) => setValue(() => e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {reduxChanged ? (
        <h1>You have changed Redux state to: {reduxExample}</h1>
      ) : (
        reduxExample
      )}
    </div>
  );
};

export default ReduxExample;
