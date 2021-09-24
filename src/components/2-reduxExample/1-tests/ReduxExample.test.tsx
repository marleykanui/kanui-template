// Custom Renderer
import { render } from "@/utilities/0-test-utils/TestWrapperContext";

// React Testing Library
import { screen, fireEvent } from "@testing-library/react";

// Component
import ReduxExample from "../2-components/ReduxExample";

test("should render initial Redux State, change input field value, submit, and render new Redux State", () => {
  render(<ReduxExample />);
  expect(screen.getByText("Redux Initial State"));
  const ReduxExampleInputField = screen.getByTestId("redux-test-input-field");
  fireEvent.change(ReduxExampleInputField, {
    target: { value: "Invoked By Test" },
  });
});
