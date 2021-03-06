import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

const name = 'PCB365'
export const siteTitle = 'PCB365 Form Prototype'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <meta
          name="description"
          content="PCB Form Prototype"
        />
        {/* <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        /> */}
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header>
        <Navbar bg="light" expand="lg" className={styles.header}>
          <Container fluid>
            <Link href="/"><Navbar.Brand href="/"><Image
                priority
                src="/images/pcb365.png"
                className={styles.logo}
                height={66.5}
                width={193}
                alt={name}
              /></Navbar.Brand></Link>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Link href="/personal"><Nav.Link href="/personal">Personal</Nav.Link></Link>
                <Link href="/forms/dynamic"><Nav.Link href="/">Small Business</Nav.Link></Link>
                <Link href="/forms/dynamicTest"><Nav.Link href="/">Commercial</Nav.Link></Link>
                <Link href="/achieve"><Nav.Link href="/">My Achieve</Nav.Link></Link>
                <NavDropdown title="Documentation" id="navbarScrollingDropdown">
                <Link href="/forms/canadacustomsinvoice"><NavDropdown.Item href="#action3">Canada Customs Invoice</NavDropdown.Item></Link>
                <Link href="/forms/uscustomsinvoice"><NavDropdown.Item href="#action4">US Customs Invoice</NavDropdown.Item></Link>
                  <NavDropdown.Divider />
                  <Link href="/forms"><NavDropdown.Item href="#action5">All Documentation</NavDropdown.Item></Link>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
            <Link href="/"><Nav.Link>Sign In</Nav.Link></Link>
          </Container>
        </Navbar>
      </header>

      { home && <section><div className={styles.blueBackgroundImage}><Image src="/images/blueBackground.jpg" alt="pcb current site Logo link" height={1688} width={3000}/></div></section>}
      <main>{children}</main>
      <footer className={styles.footer}>
      {!home && (
      <div className={styles.backToHome}>
        <Link href="/">
          <a>??? Back to home</a>
        </Link>
      </div>
    )}
        <a
          href="https://globaltradeconcierge.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>
            <Image src="/images/pcb365.png" alt="pcb current site Logo link" height={66.5} width={193}/>
          </span>
        </a>
      </footer>
    </div>
  )
}