// React
import { useState } from "react";

// React Types
import { FC } from "react";

// Component Level Types
import { EventExampleProps } from "../0-types/EventExampleProps";

const EventExample: FC<EventExampleProps> = ({ incrementBy }) => {
  const [value, setValue] = useState(0);

  const handleButtonClick = () => {
    setValue((prevValue) => prevValue + incrementBy);
  };
  return (
    <button
      onClick={() => {
        handleButtonClick();
      }}
    >
      {value}
    </button>
  );
};

export default EventExample;
