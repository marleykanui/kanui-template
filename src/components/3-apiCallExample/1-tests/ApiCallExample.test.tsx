// Custom Renderer
import { render } from "@/utilities/0-test-utils/TestWrapperContext";

// React Testing Library
import { screen, fireEvent } from "@testing-library/react";

// Component
import ApiCallExample from "../2-components/ApiCallExample";

describe("ApiCall Example Component", () => {
  describe("Rendered", () => {
    beforeEach(() => {
      // Render Component
      render(<ApiCallExample />);
    });

    test("Should render 'Test Api Call' button", () => {
      // Get "Test Api Call" button
      const ApiCallButton = screen.getByText("Test Api Call");
      // Expect Button to be in the UI
      expect(ApiCallButton).toBeInTheDocument();
    });

    test("Clicking the 'Test Api Call' button, should render 'Calling...' in UI", () => {
      // Get "Test Api Call" button
      const ApiCallButton = screen.getByText("Test Api Call");
      // Trigger Api Call
      fireEvent.click(ApiCallButton);
      // Wait for confirm message to appear
      const CallMessage = screen.getByText("Calling...");
      // Expect Confirm message to be in UI
      expect(CallMessage).toBeInTheDocument();
    });
  });
});
