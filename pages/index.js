import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>PCB 365</title>
        <meta name="description" content="PCB 365 main landing page" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to 
        </h1>
          <Link href="/"><a><img src="/pcb365.png" alt="pcb 365 logo" width="350"/></a></Link>

        <h2 className={styles.title}>
          Forms
        </h2>

        <div className={styles.grid}>
          <Link href="/forms/canada-customs-invoice"><a className={styles.card}>
            <h2>Canada Customs Invoice &rarr;</h2>
            <p>Canadian Customs Invoice</p>
          </a></Link>
        </div>
        <div className={styles.grid}>
          <Link href="/forms/us-customs-invoice"><a className={styles.card}>
            <h2>US Customs Invoice &rarr;</h2>
            <p>US Customs Invoice</p>
          </a></Link>
        </div>
      </main>

      <footer className={styles.footer}>
      Current PCB 365{' '}
        <a
          href="https://globaltradeconcierge.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          
          <span className={styles.logo}>
            <Image src="/pcb365.png" alt="pcb current site Logo link" width="160" height="80"/>
          </span>
        </a>
      </footer>
    </div>
  )
}
