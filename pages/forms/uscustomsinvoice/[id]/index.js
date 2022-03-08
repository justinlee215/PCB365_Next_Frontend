import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../../../components/layout'

import { Button, Alert } from 'react-bootstrap'

import styles from '../UScustomsinvoice.module.css'

import { dbConnect } from '../../../../utils/dbConnect'
import USCustomsInvoice from '../../../../models/USCustomsInvoice'
import { useRouter } from 'next/router'

export default function ({ USCustomsInvoice }) {

    console.log("US: ", USCustomsInvoice)
    const router = useRouter()

    const handleClick = async () => {
        const invoice = USCustomsInvoice._id
        console.log("invoice: ", invoice)

        try {
            const deleted = await fetch(`http://localhost:3000/api/forms/USCustomsInvoice/${invoice}`, {
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
                {USCustomsInvoice._id}
            </h1>
            <div>
                <Link href={`/forms/uscustomsinvoice/${USCustomsInvoice._id}/edit`}>
                    <Button className={styles.button}>Edit</Button>
                </Link>
                <Button className={styles.button} onClick={handleClick}>Delete</Button>
            </div>
        </div>
        <div className={styles.formBox}>
          <div key={USCustomsInvoice._id}>
            <div className={styles.grid}>
                <h2>{USCustomsInvoice.formType} &rarr;</h2>
                <div><p>{USCustomsInvoice.createdAt}</p></div>
                <div><p>{USCustomsInvoice.shipperAddress}</p></div>
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

export async function getServerSideProps({ query: { id } }) {
    console.log("req: ", id)
    await dbConnect()
  
    const result = await USCustomsInvoice.findById({_id: id})
    const invoice = result.toObject()
    invoice._id = result._id.toString()

    return { props: { USCustomsInvoice: invoice } }
}
