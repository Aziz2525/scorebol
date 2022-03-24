// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}
const fiksturs = async (req, res) => {
  var options = {
    method: 'GET',
    url: `${process.env.URL}/fixtures`,
    params: { date: '2022-03-23' },
    headers: {
      'X-RapidAPI-Host': process.env.X_RapidAPI_Host,
      'X-RapidAPI-Key': process.env.X_RapidAPI_Key,
    },
  }
  axios
    .request(options)
    .then(function (response) {
      res.json({ success: true, message: response.data })
    })
    .catch(function (error) {
      res.json({ success: false, message: error })
    })
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  fiksturs(req, res)
}
