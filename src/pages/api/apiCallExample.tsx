// Next Types
import type { NextApiRequest, NextApiResponse } from "next";

const apiExampleCall = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    return new Promise(() =>
      setTimeout(() => {
        res.status(200).json({ name: "ApiCallExample: Confirmed Working" });
      }, 2000)
    );
  } catch (error) {
    res.status(500).json({ statusCode: 500, message: (error as any).message });
  }
};

export default apiExampleCall;
