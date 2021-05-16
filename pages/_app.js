

import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Layout from '../components/Layout'
function MyApp({ Component, pageProps }) {
  return (
    <>
    <style jsx global>{`
      body {
        background: rgb(34, 34, 34);
        color: #fff;
      }
    `}</style>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  )
  
  
}

export default MyApp
