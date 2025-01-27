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
   * Create an iframe to obfuscate access to WSJ
   */
  const createObfuscatedIframeWSJ = () => {
    setSessions([
      <iframe
        key={1}
        src="data:text/html;base64,PGh0bWw+PHNjcmlwdD53aW5kb3cubG9jYXRpb24gPSAnaHR0cHM6Ly93d3cud3NqLmNvbSc7PC9zY3JpcHQ+PC9ib2R5PjwvaHRtbD4="
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
   * Create an iframe to obfuscate access to Weapons.com
   */
  const createObfuscatedIframeWeapons = () => {
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
        key={2}
        src={base64Html}
        title="Obfuscated Weapons"
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
      alert(`Detected Chrome Version: ${versionMatch[0]}`);
    } else {
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

  /**
   * Download Unknown Malware files with random names
   */
  const downloadUnknownMalware = (fileType) => {
    const randomNumber = Math.floor(Math.random() * 1000000);
    const fileName = `get-unknown-${randomNumber}.${fileType}`;
    const link = document.createElement('a');
    link.href = `https://trusted-server.com/${fileName}`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container">
      <Head>
        <title>RBI Testing PoC</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="RBI PoC Testing App!" />

        <section>
          <h1>RBI PoC Testing</h1>
          <p>This application demonstrates various RBI bypass PoCs, including multi-session testing, GPU-based payloads, and zero-day protection testing.</p>
        </section>

        <hr />

        <section>
          <h2>Open Multiple Sessions</h2>
          <button onClick={openMultipleSessions}>Open 15 Sessions</button>
          <div style={{ marginTop: '20px' }}>{sessions}</div>
        </section>

        <hr />

        <section>
          <h2>Trigger Payload</h2>
          <button onClick={triggerPayload}>Trigger GPU Payload</button>
        </section>

        <hr />

        <section>
          <h2>Obfuscated Links</h2>
          <button onClick={createObfuscatedIframeWSJ}>Open Obfuscated WSJ</button>
          <button onClick={createObfuscatedIframeWeapons}>Open Obfuscated Weapons</button>
        </section>

        <hr />

        <section>
          <h2>Check Browser Version</h2>
          <button onClick={checkBrowserVersion}>Check Chrome Version</button>
        </section>

        <hr />

        <section>
          <h2>Redirect Chain</h2>
          <button onClick={redirectChain}>Start Redirect Chain</button>
        </section>

        <hr />

        <section>
          <h2>Trigger Headless Session</h2>
          <button onClick={openHeadlessSession}>Open Headless Session</button>
        </section>

        <hr />

        <section>
          <h2>Unknown Malware</h2>
          <p>Download files for zero-day protection testing:</p>
          <button onClick={() => downloadUnknownMalware('doc')}>Download DOC</button>
          <button onClick={() => downloadUnknownMalware('xls')}>Download XLS</button>
          <button onClick={() => downloadUnknownMalware('pdf')}>Download PDF</button>
        </section>

        <hr />

        <section>
          <h2>Download PDF</h2>
          <p>Click the link below to download a PDF file:</p>
          <a
            href="https://www.netskope.com/wp-content/uploads/2022/10/2024-12-Threat-Protection-DS-386-10.pdf"
            download
          >
            Download Threat Protection Datasheet
          </a>
        </section>

        <hr />

        <section>
          <h2>Homebanking Legit Access</h2>
          <p>Click the link below to visit your trustworth homebanking site:</p>
          <a href="https://www.bancociudad.com.ar/" rel="noopener noreferrer">
            Visit Homebanking Website
          </a>
              
          <h2>Homebanking Phishing HREF Link</h2>
          <p>Click the link below to visit a deceptive website:</p>
          <a href="http://bancociudadesp.com" rel="noopener noreferrer">
            Visit Deceptive Website
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
}
