// Custom Renderer
import { render } from "@/utilities/0-test-utils/TestWrapperContext";

// React Testing Library
import { screen, fireEvent } from "@testing-library/react";

// Component
import ReduxExample from "../2-components/ReduxExample";

test("should render initial Redux State, change input field value, submit, and render new Redux State", () => {
  // Render Component
  render(<ReduxExample />);
  // Expect Initial State Value
  expect(screen.getByText("Redux Initial State"));
  // Get Input Field
  const ReduxExampleInputField = screen.getByTestId("redux-test-input-field");
  // Input New Entry
  fireEvent.change(ReduxExampleInputField, {
    target: { value: "Invoked By Test" },
  });
  // Submit Entry
  fireEvent.click(screen.getByText("Submit"));
  // Expect Altered State
  expect(screen.getByText("You have changed Redux state to: Invoked By Test"));
});
