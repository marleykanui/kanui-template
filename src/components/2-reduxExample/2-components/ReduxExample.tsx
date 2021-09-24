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
  const [value, setValue] = useState<string>("");
  const [reduxChanged, setReduxChanged] = useState(false);

  const {
    ReduxExample: { reduxExample },
  } = useSelector<AppState, AppState>((state) => state);

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
          data-testid="redux-test-input-field"
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
