import Layout from "../components/Layout"

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <style jsx global>{`
        
      `}</style>
    </div>
  )
}

export default MyApp
