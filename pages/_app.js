import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <div>
    hello World!
    <Component {...pageProps} />
  </div>
  
  )
}

export default MyApp
