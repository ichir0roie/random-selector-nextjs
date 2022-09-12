// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'


type Data = {
  data: Partial<{
    [key: string]: string | string[];
  }>
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // var name=req.query["name"]!==undefined?req.query["name"][0]:""
  // res.status(200).json({ name:name })
  res.status(200).json({ data: req.query })
}
