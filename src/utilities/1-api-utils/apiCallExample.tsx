// Axios
import axios from "axios";

export const apiCallExample = async (url: string) => {
  try {
    const data = await axios.get(url);
    return data;
  } catch (err) {
    throw new Error((err as any).message);
  }
};
