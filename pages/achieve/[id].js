// import { useRouter } from 'next/router'

import { dbConnect } from '../../utils/dbConnect'
import CanadaCustomsInvoice from '../../models/CanadaCustomsInvoice'


export async function getStaticPaths() {
    await dbConnect()
  
    const result = await CanadaCustomsInvoice.find({})
  
    const paths = result.map((doc) => {
        const invoice = doc.toObject()
        invoice._id = doc._id.toString()

        return { params: { id: invoice._id }}
      })
   
    return { paths, fallback: false }
}

export async function getStaticProps( context ) { 
//     console.log('context: ', context)
//     const id = context.params.id
//     const res = await CanadaCustomsInvoice.find({id: context.params.id})
//     // const data = await res.json()

//     // Pass post data to the page via props
    return { props: { archieve: "hello" } }
  }

  const Achieve = ({ archieve }) => {
    //   const router = useRouter()
    //   console.log("router: ", router)
    //   const { id } = router.query
    
      return (
      <>
        <h1>Achieve: {archieve.shipperName} </h1>
        {/* <p>{archieve.shipperAddress}</p>
        <p>{archieve.shipperName}</p>
        <p>{archieve.exporterName}</p> */}
      </>
    )
  }
    
export default Achieve
    