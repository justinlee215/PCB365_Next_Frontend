import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../components/layout'
// import styles from '../../styles/USCustomsInvoice.module.css'

export default function USCustomsInvoice( {...props}) {
  return (
    <Layout>
      <Head>
        <title>US Customs Invoice</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <h2>
          US Customs Invoice
        </h2>
       </main>
    </Layout>
    )
}