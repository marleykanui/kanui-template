// Custom Renderer
import { render } from "@/utilities/0-test-utils/TestWrapperContext";

// React Testing Library
import { screen, fireEvent } from "@testing-library/react";

// Component
import EventExample from "../2-components/EventExample";

describe("Event Example Component", () => {
  describe("Rendered", () => {
    beforeEach(() => {
      // Render component with arbitrary data passed in as props
      render(<EventExample incrementBy={3} />);
    });
    test("When passed 3, and triggered, should equal 6'", () => {
      // Get initial state
      const InitialExampleTwoValue = screen.getByText("0");
      // Trigger local state update twice
      fireEvent.click(InitialExampleTwoValue);
      fireEvent.click(InitialExampleTwoValue);
      // Expect new value to be 6
      expect(InitialExampleTwoValue.textContent).toBe("6");
    });
  });
});
