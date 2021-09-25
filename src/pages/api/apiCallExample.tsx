// Next Types
import type { NextApiRequest, NextApiResponse } from "next";

const apiExampleCall = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    res.status(200).json({ name: "apiCallExampleResponse" });
  } catch (error) {
    res.status(500).json({ statusCode: 500, message: (error as any).message });
  }
};

export default apiExampleCall;
