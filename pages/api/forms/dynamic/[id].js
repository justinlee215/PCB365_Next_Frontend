import { dbConnect } from '../../../../utils/dbConnect'
import Dynamic from '../../../../models/dynamic'

export default async function handler (req, res) {
  const { 
      method,
      query: { id }
     } = req

  await dbConnect()

  switch (method) {
    case 'GET':
        console.log("findingId:", id)
      try {
        const dynamic = await Dynamic.findById(id)

        if (!dynamic) {
            return res.status(400).json({ success: false })
        }

        res.status(200).json({ success: true, data: dynamic })
        console.log("Found the data from the database: ", dynamic)
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'PUT':
      try {
        console.log("req.body: ", req.body)
        const dynamic = await Dynamic.findByIdAndUpdate(id, req.body.dynamic, {
            new: true,
            runValidator: true
        } )

        if (!dynamic) {
            return res.status(400).json({ success: false })
        }

        res.status(200).json({ success: true, data: dynamic })
        console.log("Found the data updated to the database: ", dynamic)
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'DELETE':
        try {
          console.log("id: ", id)
          const dynamic = await Dynamic.deleteOne({_id: id })

        if (!dynamic) {
          return res.status(400).json({ success: false })
        }

        res.status(200).json({ success: true, data: {} })
        console.log("The data deleted: ", dynamic)
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
        res.status(400).json({ success: false })
  }
}