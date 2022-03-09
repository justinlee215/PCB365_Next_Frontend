import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../../components/layout'

import { Button, Alert } from 'react-bootstrap'

import styles from './dynamic.module.css'

// import { dbConnect } from '../../../utils/dbConnect'
// import dynamic from '../../../models/dynamic'

export default function ({ dynamics }) {

  console.log("Dynamics: ", dynamics)
  return (
    <Layout home>
      <Head>
        <title>Dynamic Forms</title>
        <meta name="description" content="Complex Forms" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <div className={styles.createNewBox}>
          <h1 className={styles.title}>
            Dynamic Forms
          </h1>
          <Link href={`/forms/dynamic/new`}><Button className={styles.button}>Create New</Button></Link>
        </div>
        <div className={styles.formBox}>
        { dynamics && dynamics.map((invoice => (
          <div key={invoice._id}>
              <div className={styles.grid}>
                  <Link href={`/forms/dynamic/${invoice._id}`}>
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

export async function getStaticProps() {

  const res = await fetch('http://localhost:3000/api/forms/dynamic')
  const dynamics = await res.json()

  console.log("dynamics: ", dynamics)
  return {
    props: 
    { dynamics: dynamics.data ? dynamics.data.reverse() : null }
  }
}

// export async function getServerSideProps() {
//     await dbConnect()
  
//     const result = await dynamic.find({})
    
//     const dynamics = result.reverse().map((doc) => {
//       const invoice = doc.toObject()
//       invoice._id = doc._id.toString()
//       return invoice
//     })

//     return { props: { dynamics: dynamics } }
// }



