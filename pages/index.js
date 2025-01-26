import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Home() {
  // Define the functions
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
    const versionMatch = userAgent.match(/Chrome\/([0-9.]+)/);

    if (versionMatch) {
      console.log(`Detected Chrome Version: ${versionMatch[1]}`);
      alert(`Detected Chrome Version: ${versionMatch[1]}`);
    } else {
      console.log('Unable to detect Chrome version.');
      alert('Unable to detect Chrome version.');
    }
  };

  const openMultipleTabs = () => {
    const url = 'https://example.com'; // Replace with the URL you want to open
    for (let i = 0; i < 15; i++) {
      window.open(url, '_blank');
    }
  };

  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Test Isolation App!" />
        <p className="description">
          Demo 1 - RCE:{' '}
          <a
            href="https://www.cnn.com"
            onClick={(e) => {
              e.preventDefault(); // Prevent default link behavior
              // Redirect to CNN first
              window.location.href = 'https://www.cnn.com';

              // Open the custom scheme after a short delay
              setTimeout(() => {
                window.open(
                  'ms-windows-store://pdp/?productid=9WZDNCRFJBMP',
                  '_blank'
                );
              }, 2000); // Adjust delay as needed
            }}
          >
            Click Me
          </a>
          <br />
          Demo 2 - Malware: <br />
          Demo 3 - Something: <br />
        </p>

        <h1>RBI Link Testing</h1>
        <p>Click the links below to test various bypass scenarios:</p>

        {/* Direct redirection to payload */}
        <a href="https://trusted-server.com/payload" target="_blank">
          Direct Payload Download
        </a>
        <br />
        <br />

        {/* Redirect chain */}
        <a href="#" onClick={redirectChain}>
          Start Redirect Chain
        </a>
        <br />
        <br />

        {/* Trigger headless session */}
        <button onClick={openHeadlessSession}>Open Headless Chrome Session</button>
        <br />
        <br />

        {/* Test file type rendering */}
        <a href="https://trusted-server.com/trusted.pdf" target="_blank">
          Download trusted PDF
        </a>
        <br />
        <a href="https://trusted-server.com/trusted.html" target="_blank">
          Render trusted HTML
        </a>
        <br />
        <a href="https://trusted-server.com/trusted.js" target="_blank">
          Execute trusted JavaScript
        </a>
        <br />
        <br />

        {/* Obfuscated link */}
        <a
          href="data:text/html;base64,PGh0bWw+PGJvZHk+PHNjcmlwdD53aW5kb3cubG9jYXRpb24gPSAiaHR0cHM6Ly9tYWxpY2lvdXMtY29kZS5jb20iOzwvc2NyaXB0PjwvYm9keT48L2h0bWw+"
          target="_blank"
        >
          Obfuscated Link
        </a>
        <br />
        <br />

        {/* Browser version check */}
        <button onClick={checkBrowserVersion}>Check Chrome Version</button>
        <br />
        <br />

        {/* Open multiple tabs */}
        <h2>Open Multiple Tabs</h2>
        <p>Click the button below to open 15 tabs with the same URL:</p>
        <button onClick={openMultipleTabs}>Open 15 Tabs</button>
      </main>

      <Footer />
    </div>
  );
}
