import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../../../components/layout'

import { Button, Alert } from 'react-bootstrap'

import styles from '../canadacustomsinvoice.module.css'

import { dbConnect } from '../../../../utils/dbConnect'
import CanadaCustomsInvoice from '../../../../models/CanadaCustomsInvoice'
import { useRouter } from 'next/router'

export default function ({ canadaCustomsInvoice }) {

    console.log("canada: ", canadaCustomsInvoice)
    const router = useRouter()

    const handleClick = async () => {
        const invoice = canadaCustomsInvoice._id
        console.log("invoice: ", invoice)

        try {
            const deleted = await fetch(`http://localhost:3000/api/forms/CanadaCustomsInvoice/${invoice}`, {
                method: "DELETE"
            })
            router.push('/forms/canadacustomsinvoice')
        } catch (error) {
            console.log("error: ", error.message)
        }
    }

  return (
    <Layout home>
      <Head>
        <title>Canada Customs Invoice</title>
        <meta name="description" content="Complex Forms" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <div className={styles.createNewBox}>
            <h1 className={styles.title}>
                {canadaCustomsInvoice._id}
            </h1>
            <div>
                <Link href={`/forms/canadacustomsinvoice/${canadaCustomsInvoice._id}/edit`}>
                    <Button className={styles.button}>Edit</Button>
                </Link>
                <Button className={styles.button} onClick={handleClick}>Delete</Button>
            </div>
        </div>
        <div className={styles.formBox}>
          <div key={canadaCustomsInvoice._id}>
            <div className={styles.grid}>
                <h2>{canadaCustomsInvoice.formType} &rarr;</h2>
                <div><p>{canadaCustomsInvoice.createdAt}</p></div>
                <div><p>{canadaCustomsInvoice.shipperAddress}</p></div>
                {/* <p>Updated at {canadaCustomsInvoice.createdAt}</p>
                <p>Updated at {canadaCustomsInvoice.updatedAt}</p> */}
                {/* <p>{ObjectId("621e23407d301fa19a38b548").getTimestamp()}</p> */}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  ) 
}

export async function getServerSideProps({ query: { id } }) {
    console.log("req: ", id)
    await dbConnect()
  
    const result = await CanadaCustomsInvoice.findById({_id: id})
    const invoice = result.toObject()
    invoice._id = result._id.toString()

    return { props: { canadaCustomsInvoice: invoice } }
}
