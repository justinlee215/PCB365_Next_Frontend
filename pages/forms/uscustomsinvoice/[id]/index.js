import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../../../components/layout'

import { Button, Alert } from 'react-bootstrap'

import styles from '../uscustomsinvoice.module.css'

// import { dbConnect } from '../../../../utils/dbConnect'
// import USCustomsInvoice from '../../../../models/USCustomsInvoice'

export default function ({ usCustomsInvoice }) {

    console.log("usCustomsInvoice: ", usCustomsInvoice)

    const handleClick = async () => {
        const id = usCustomsInvoice._id
        console.log("id: ", id)

        try {
            const deleted = await fetch(`http://localhost:3000/api/forms/USCustomsInvoice/${id}`, {
                method: "DELETE"
            })
            router.push('/forms/uscustomsinvoice')
        } catch (error) {
            console.log("error: ", error.message)
        }
    }

  return (
    <Layout home>
      <Head>
        <title>US Customs Invoice</title>
        <meta name="description" content="Complex Forms" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <div className={styles.createNewBox}>
            <h1 className={styles.title}>
                {usCustomsInvoice._id}
            </h1>
            <div>
                <Link href={`/forms/uscustomsinvoice/${usCustomsInvoice._id}/edit`}>
                    <Button className={styles.button}>Edit</Button>
                </Link>
                <Button className={styles.button} onClick={handleClick}>Delete</Button>
            </div>
        </div>
        <div className={styles.formBox}>
          <div key={usCustomsInvoice._id}>
            <div className={styles.grid}>
                <h2>{usCustomsInvoice.formType} &rarr;</h2>
                <div><p>{usCustomsInvoice.createdAt}</p></div>
                <div><p>{usCustomsInvoice.shipperAddress}</p></div>
                {/* <p>Updated at {USCustomsInvoice.createdAt}</p>
                <p>Updated at {USCustomsInvoice.updatedAt}</p> */}
                {/* <p>{ObjectId("621e23407d301fa19a38b548").getTimestamp()}</p> */}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  ) 
}

// export async function getStaticPaths() {
//   const res = await fetch(`http://localhost:3000/api/forms/USCustomsInvoice`)
//   const data = await res.json()

//   console.log("data: ", data)

//   const paths = data.data.map(invoice => {
//     return {
//       params: { id: invoice._id.toString()}
//     }
//   })

//   console.log("paths: ", paths)
//   return {
//     paths,
//     fallback: false
//   }
// }

// export async function getStaticProps(context) {
//   const id = context.params.id 

//   console.log("id: ", id)

//   const res = await fetch(`http://localhost:3000/api/forms/USCustomsInvoice/${id}`)
//   const usCustomsInvoice = await res.json()

//   console.log("usCustomsInvoice: ", usCustomsInvoice)
//   return {
//     props:  { usCustomsInvoice: usCustomsInvoice.data }
//   }
// }

// export async function getServerSideProps({ params: { id } }) {
//     console.log("req: ", id)
//     await dbConnect()
  
//     const result = await USCustomsInvoice.findById({_id: id})
//     const invoice = result.toObject()
//     invoice._id = result._id.toString()

//     return { props: { usCustomsInvoice: invoice } }
// }

export async function getServerSideProps({ params: { id } }) {
      const res = await fetch(`http://localhost:3000/api/forms/USCustomsInvoice/${id}`)
  const usCustomsInvoice = await res.json()

  console.log("usCustomsInvoice: ", usCustomsInvoice)
  return {
    props:  { usCustomsInvoice: usCustomsInvoice.data }
  }
  
}

// export async function getStaticProps(context) {
//   const id = context.params.id 

//   console.log("id: ", id)

//   const res = await fetch(`http://localhost:3000/api/forms/USCustomsInvoice/${id}`)
//   const usCustomsInvoice = await res.json()

//   console.log("usCustomsInvoice: ", usCustomsInvoice)
//   return {
//     props:  { usCustomsInvoice: usCustomsInvoice.data }
//   }
// }