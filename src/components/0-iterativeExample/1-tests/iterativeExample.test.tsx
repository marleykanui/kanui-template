// Custom Renderer
import { render } from "@/utilities/0-test-utils/TestWrapperContext";

// React Testing Library
import { screen } from "@testing-library/react";

// Component
import IterativeExample from "../3-components/IterativeExample";

// Component Data
import { IterativeExampleData } from "../2-data/IterativeExampleData";

describe("Iterative Example", () => {
  describe("Rendered", () => {
    beforeEach(() => {
      // Render component with test data passed in
      render(<IterativeExample data={IterativeExampleData} />);
    });
    test("Should render a list of technologies in this stack", () => {
      // Run a loop over the length of the dataset
      for (const item of IterativeExampleData) {
        // Get each data point by text in UI
        const techLi = screen.getByText(item.text);
        // Expect each to be rendered in the Document
        expect(techLi).toBeInTheDocument();
      }
    });
  });
});
