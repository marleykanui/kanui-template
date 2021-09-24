// React Testing Library
import { render, screen, fireEvent } from "@testing-library/react";

// Component
import EventExample from "../2-components/EventExample";

test("When passed 3, and triggered, should equal 6'", () => {
  render(<EventExample incrementBy={3} />);
  const InitialExampleTwoValue = screen.getByText("0");
  fireEvent.click(InitialExampleTwoValue);
  fireEvent.click(InitialExampleTwoValue);
  expect(InitialExampleTwoValue.textContent).toBe("6");
});
