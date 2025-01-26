import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import { useState } from 'react';

export default function Home() {
  const [sessions, setSessions] = useState([]);

  // Function to create multiple iframes simulating sessions
  const createMultipleSessions = () => {
    const url = 'https://rbidemo.netlify.app'; // Target URL
    const newSessions = [];
const createMultipleSessions = () => {
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
      setSessions([...newSessions]); // Update the state after each addition
    }, i * 3000); // Delay of 3 seconds per iframe
  }
};

    setSessions(newSessions);
  };

  const redirectChain = () => {
    setTimeout(() => {
      window.location.href = 'https://trusted-server.com/step1';
    }, 1000);
  };

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

  const triggerPayload = () => {
    window.location.href = '/lab1.html';
  };

  return (
    <div className="container">
      <Head>
        <title>RBI Testing PoC</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="RBI PoC Testing App!" />

        {/* Description */}
        <h1>RBI PoC Testing</h1>
        <p>Test multiple RBI bypass scenarios using the features below:</p>

        {/* Section: Open multiple sessions */}
        <h2>Open Multiple Sessions</h2>
        <p>Click the button below to open 15 new sessions of <code>https://rbidemo.netlify.app</code>.</p>
        <button onClick={createMultipleSessions}>Open 15 Sessions</button>

        {/* Render the iframes */}
        <div style={{ marginTop: '20px' }}>{sessions}</div>

        <hr />

        {/* Section: Redirect Chain */}
        <h2>Redirect Chain</h2>
        <p>Click the button below to test a redirect chain scenario:</p>
        <a href="#" onClick={redirectChain}>Start Redirect Chain</a>

        <hr />

        {/* Section: Trigger Headless Session */}
        <h2>Trigger Headless Session</h2>
        <p>Click the button below to simulate starting a headless session:</p>
        <button onClick={openHeadlessSession}>Open Headless Chrome Session</button>

        <hr />

        {/* Section: Browser Version Check */}
        <h2>Check Browser Version</h2>
        <p>Click the button below to detect the Chrome version:</p>
        <button onClick={checkBrowserVersion}>Check Chrome Version</button>

        <hr />

        {/* Section: Trigger Payload */}
        <h2>Trigger Payload</h2>
        <p>
          Click the button below to load the lab1 payload, which simulates a GPU
          compositing vulnerability for educational purposes.
        </p>
        <button onClick={triggerPayload}>Trigger Payload</button>

        <hr />

        {/* Section: File Type Rendering */}
        <h2>File Type Rendering Tests</h2>
        <p>Click the links below to test rendering of different file types:</p>
        <a href="https://trusted-server.com/trusted.pdf" target="_blank">
          Download Trusted PDF
        </a>
        <br />
        <a href="https://trusted-server.com/trusted.html" target="_blank">
          Render Trusted HTML
        </a>
        <br />
        <a href="https://trusted-server.com/trusted.js" target="_blank">
          Execute Trusted JavaScript
        </a>

        <hr />

        {/* Obfuscated Link */}
        <h2>Obfuscated Link</h2>
        <p>Click the link below to test how RBI handles obfuscated links:</p>
        <a
          href="data:text/html;base64,PGh0bWw+PGJvZHk+PHNjcmlwdD53aW5kb3cubG9jYXRpb24gPSAiaHR0cHM6Ly9tYWxpY2lvdXMtY29kZS5jb20iOzwvc2NyaXB0PjwvYm9keT48L2h0bWw+"
          target="_blank"
        >
          Obfuscated Link
        </a>
      </main>

      <Footer />
    </div>
  );
}
