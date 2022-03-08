import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../../components/layout'

import { Button, Alert } from 'react-bootstrap'

import styles from './uscustomsinvoice.module.css'

import { dbConnect } from '../../../utils/dbConnect'
import USCustomsInvoice from '../../../models/USCustomsInvoice'

export default function ({ USCustomsInvoices }) {

  console.log("US: ", USCustomsInvoices)
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
            US Customs Invoices
          </h1>
          <Link href={`/forms/uscustomsinvoice/new`}><Button className={styles.button}>Create New</Button></Link>
        </div>
        <div className={styles.formBox}>
        { USCustomsInvoices.map((invoice => (
          <div key={invoice._id}>
              <div className={styles.grid}>
                  <Link href={`/forms/uscustomsinvoice/${invoice._id}`}>
                      <a className={styles.card}>
                      <h2>{invoice.formType} &rarr;</h2>
                      <div><p>{invoice.createdAt}</p></div>
                      <div><p>{invoice.shipperAddress}</p></div>
                      {/* <p>Updated at {invoice.createdAt}</p>
                      <p>Updated at {invoice.updatedAt}</p> */}
                      {/* <p>{ObjectId("621e23407d301fa19a38b548").getTimestamp()}</p> */}
                      </a>
                  </Link>
              </div>
            </div>
          )))}
        </div>
      </main>
    </Layout>
  ) 
}

export async function getServerSideProps() {
    await dbConnect()
  
    const result = await USCustomsInvoice.find({})
    
    const USCustomsInvoices = result.reverse().map((doc) => {
      const invoice = doc.toObject()
      invoice._id = doc._id.toString()
      return invoice
    })

    return { props: { USCustomsInvoices: USCustomsInvoices } }
}

// export async function getStaticProps() {
//   // const USCustomsInvoices = await USCustomsInvoice.find({})

//   const res = await fetch('http://localhost:3000/api/forms/USCustomsInvoice')
//   const USCustomsInvoices = await res.json()

//   console.log("US2: ", US)
//   return {
//     props: 
//     { USCustomsInvoices }
//   }
// }

