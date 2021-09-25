// React
import { useState } from "react";

// API Utils
import { apiCallExample } from "@/utilities/1-api-utils/apiCallExample";

// Axios Types
import { AxiosResponse } from "axios";

const ApiCallExample = () => {
  const [data, setData] = useState<string>("");
  const [called, setCalled] = useState<boolean>(false);

  const getData = async () => {
    setCalled(true);
    try {
      const apiData: AxiosResponse = await apiCallExample(
        "/api/apiCallExample"
      );
      setData(apiData.data.name);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {data ? (
        <pre>{data}</pre>
      ) : called ? (
        <h1>Calling...</h1>
      ) : (
        <button onClick={() => getData()}>Test Api Call</button>
      )}
    </div>
  );
};

export default ApiCallExample;
