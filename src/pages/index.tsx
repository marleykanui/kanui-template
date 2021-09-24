// React
import { Fragment } from "react";

// Components
import IterativeExample from "@/components/0-iterativeExample/3-components/IterativeExample";
import EventExample from "@/components/1-eventExample/2-components/EventExample";
import ReduxExample from "@/components/2-reduxExample/2-components/ReduxExample";

// Data
import { IterativeExampleData } from "@/components/0-iterativeExample/2-data/IterativeExampleData";

// Next Types
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Fragment>
      <IterativeExample data={IterativeExampleData} />
      <br />
      <EventExample incrementBy={5} />
      <br />
      <ReduxExample />
    </Fragment>
  );
};

export default Home;
