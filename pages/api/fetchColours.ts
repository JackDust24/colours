// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getColoursPayload } from "./getPayload.ts";

export default async function handler(req, res) {
  const data = await getColoursPayload();
  res.status(200).json({ data });
}
