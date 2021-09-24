// Next Types
import type { NextApiRequest, NextApiResponse } from "next";

const apiExample = (req: NextApiRequest, res: NextApiResponse) => {
  const { params } = req.body;
  res.status(200).json({ name: "Kanui", ...params });
};

export default apiExample;
