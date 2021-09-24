// React Types
import { FC } from "react";

// Component Level Types
import { IterativeExampleProps } from "../0-types/IterativeExampleProps";

const IterativeExample: FC<IterativeExampleProps> = ({ data }) => {
  return (
    <ul>
      {data.map(({ id, text }) => (
        <li key={id}>{text}</li>
      ))}
    </ul>
  );
};

export default IterativeExample;
