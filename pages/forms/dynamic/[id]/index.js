import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../../../components/layout'

import { Button, Alert } from 'react-bootstrap'

import styles from '../dynamic.module.css'

import { dbConnect } from '../../../../utils/dbConnect'
import dynamic from '../../../../models/dynamic'
import { useRouter } from 'next/router'

export default function ({ dynamic }) {

    console.log("Dynamic: ", dynamic)
    const router = useRouter()

    const handleClick = async () => {
        const invoice = dynamic._id
        console.log("invoice: ", invoice)

        try {
            const deleted = await fetch(`http://localhost:3000/api/forms/dynamic/${invoice}`, {
                method: "DELETE"
            })
            router.push('/forms/dynamic')
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
                {dynamic._id}
            </h1>
            <div>
                <Link href={`/forms/dynamic/${dynamic._id}/edit`}>
                    <Button className={styles.button}>Edit</Button>
                </Link>
                <Button className={styles.button} onClick={handleClick}>Delete</Button>
            </div>
        </div>
        <div className={styles.formBox}>
          <div key={dynamic._id}>
            <div className={styles.grid}>
                <h2>{dynamic.formType} &rarr;</h2>
                <div><p>{dynamic.createdAt}</p></div>
                <div><p>{dynamic.shipperAddress}</p></div>
                {/* <p>Updated at {dynamic.createdAt}</p>
                <p>Updated at {dynamic.updatedAt}</p> */}
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
  
    const result = await dynamic.findById({_id: id})
    const invoice = result.toObject()
    invoice._id = result._id.toString()

    return { props: { dynamic: invoice } }
}
