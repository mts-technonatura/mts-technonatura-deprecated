import cookie from "cookie";
import { NextApiRequest, NextApiResponse } from "next";

export default function GetJWTToken(req: NextApiRequest, res: NextApiResponse) {
  // req.cookies.auth;

  res.status(200).json({ message: "hello there" });
}
//
