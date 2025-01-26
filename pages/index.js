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
          Demo 1 - RCE : <a href="ms-windows-store://pdp/?productid=9WZDNCRFJBMP">Open App in Microsoft Store</a> <br />
          Demo 2 - Malware : <br />
          Demo 3 - Something : <br />

      <h1>RBI Link Testing</h1>
    <p>Click the links below to test various bypass scenarios:</p>

    <!-- Direct redirection to payload -->
    <a href="https://malicious-server.com/payload" target="_blank">Direct Payload Download</a>

    <br><br>

    <!-- Redirect chain -->
    <a href="#" onclick="redirectChain(); return false;">Start Redirect Chain</a>

    <br><br>

    <!-- Trigger headless session -->
    <button onclick="openHeadlessSession()">Open Headless Chrome Session</button>

    <br><br>

    <!-- Test file type rendering -->
    <a href="https://malicious-server.com/malicious.pdf" target="_blank">Download Malicious PDF</a>
    <br>
    <a href="https://malicious-server.com/malicious.html" target="_blank">Render Malicious HTML</a>
    <br>
    <a href="https://malicious-server.com/malicious.js" target="_blank">Execute Malicious JavaScript</a>

    <br><br>

    <!-- Obfuscated link -->
    <a href="data:text/html;base64,PGh0bWw+PGJvZHk+PHNjcmlwdD53aW5kb3cubG9jYXRpb24gPSAiaHR0cHM6Ly9tYWxpY2lvdXMtY29kZS5jb20iOzwvc2NyaXB0PjwvYm9keT48L2h0bWw+" target="_blank">Obfuscated Link</a>

        </p>
      </main>

      <Footer />
    </div>
  )
}
