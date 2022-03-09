import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/layout'

import { Button} from 'react-bootstrap'

import styles from './dynamicTest.module.css'

import { formData } from '../../../components/dynamic/formData4'
import Form from '../../../components/dynamic/Form'

export default function index() {
  return (
    <Layout home>
    <Head>
      <title>Dynamic Forms from JSON Data</title>
      <meta name="description" content="Complex Forms" />
      <link rel="icon" href="/favicon.png" />
    </Head>
    <main>
      <div className={styles.createNewBox}>
        <h1 className={styles.title}>
          Dynamic Forms from JSON Data
        </h1>
      </div>
      <div className="App">
        <Form formData={formData} />
      </div>
    </main>
  </Layout>

  );
}