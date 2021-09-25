// Custom Renderer
import { render } from "@/utilities/0-test-utils/TestWrapperContext";

// React Testing Library
import { screen, fireEvent } from "@testing-library/react";

// Component
import ReduxExample from "../2-components/ReduxExample";

describe("Redux Example Component", () => {
  describe("Should render the initial state and be able to update it", () => {
    beforeEach(() => {
      // Render Component
      render(<ReduxExample />);
    });

    test("should render initial Redux State, change input field value, submit, and render new Redux State", () => {
      // Get initial state text
      const InitialStateText = screen.getByText("Redux Initial State");
      // Expect Initial State Value
      expect(InitialStateText).toBeInTheDocument();
      // Get Input Field
      const ReduxExampleInputField = screen.getByTestId(
        "redux-test-input-field"
      );
      // Input New Entry
      fireEvent.change(ReduxExampleInputField, {
        target: { value: "Invoked By Test" },
      });
      // Submit Entry
      fireEvent.click(screen.getByText("Submit"));
      // Get Altered State
      const AlteredStateText = screen.getByText(
        "You have changed Redux state to: Invoked By Test"
      );
      // Expect Altered State
      expect(AlteredStateText).toBeInTheDocument();
    });
  });
});
