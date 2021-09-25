// React
import { useState, useEffect } from "react";

// API Utils
import { apiCallExample } from "@/utilities/1-api-utils/apiCallExample";

const ApiCallExample = () => {
  const [data, setData] = useState<string>("");

  const getData = async () => {
    try {
      const apiData = await apiCallExample("/api/apiCallExample");
      setData(apiData.data.name);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (!data) {
    return <h1>Loading...</h1>;
  }

  return <pre>{data}</pre>;
};

export default ApiCallExample;
