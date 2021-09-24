// Custom Renderer
import { render } from "@/utilities/0-test-utils/TestWrapperContext";

// React Testing Library
import { screen } from "@testing-library/react";

// Component
import IterativeExample from "../3-components/IterativeExample";

// Component Data
import { IterativeExampleData } from "../2-data/IterativeExampleData";

test("Should render a list of technologies in this stack", () => {
  render(<IterativeExample data={IterativeExampleData} />);
  for (const item of IterativeExampleData) {
    const techLi = screen.getByText(item.text);
    expect(techLi).toBeInTheDocument();
  }
});
