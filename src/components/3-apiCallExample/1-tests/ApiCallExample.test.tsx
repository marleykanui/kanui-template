// MSW
import { setupServer } from "msw/node";
import { rest } from "msw";

// Custom Renderer
import { render } from "@/utilities/0-test-utils/TestWrapperContext";

// React Testing Library
import {
  screen,
  fireEvent,
  waitForElementToBeRemoved,
} from "@testing-library/react";

// Component
import ApiCallExample from "../2-components/ApiCallExample";

// MSW Types
import { DefaultRequestBody } from "msw";

// Component Level Types
import { Response } from "../0-types/ApiCallExample.test";

// Mock Server
const server = setupServer(
  rest.get<DefaultRequestBody, Response>(
    "/api/apiCallExample",
    (req, res, ctx) => {
      return res(ctx.json({ name: "ApiCallExample: Confirmed Working" }));
    }
  )
);

beforeAll(() => server.listen());
afterAll(() => server.close());
// afterEach(() => server.resetHandlers());

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

    test("Clicking the 'Test Api Call' button, should render 'Calling...' in UI", async () => {
      // Get "Test Api Call" button
      const ApiCallButton = screen.getByText("Test Api Call");
      // Trigger Api Call
      fireEvent.click(ApiCallButton);
      // Wait for "Calling..." message to be removed
      await waitForElementToBeRemoved(() => screen.getByText("Calling..."));
      // Expect "ApiCallExample: Confirmed Working" to be Rendered in Dom
      expect(
        screen.getByText("ApiCallExample: Confirmed Working")
      ).toBeInTheDocument();
    });
  });
});
