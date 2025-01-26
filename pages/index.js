import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Test Isolation app!" />
        <p className="description">
          Demo 1 - RCE <code>pages/index.js</code><br />
          Demo 2 - Malware <code> URL </code><br />
          Demo 3 - Something <code> URL </code><br />
        </p>
      </main>

      <Footer />
    </div>
  )
}
