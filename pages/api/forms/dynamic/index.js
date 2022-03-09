import { dbConnect } from '../../../../utils/dbConnect'
import Dynamic from '../../../../models/dynamic'

export default async function (req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const dynamic = await Dynamic.find({})
        res.status(200).json({ success: true, data: dynamic })
        console.log("This is all the data from the database: ", dynamic)
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        console.log("req.body: ", req.body)
        const dynamic = await Dynamic.create(req.body.dynamic)
        console.log("Invoice created: ", dynamic)
        res.status(201).json({ success: true, data: dynamic })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}