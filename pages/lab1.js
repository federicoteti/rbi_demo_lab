import React, { useEffect } from 'react';

export default function Lab1() {
  useEffect(() => {
    console.log('Initializing WebGL...');

    // WebGL test
    const canvas = document.getElementById('testCanvas');
    if (canvas) {
      const gl = canvas.getContext('webgl');

      if (!gl) {
        console.error('WebGL not supported on this browser.');
      } else {
        console.log('WebGL initialized successfully.');

        try {
          // Simulate a GPU-intensive operation with an oversized buffer
          const buffer = gl.createBuffer();
          gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
          const largeArray = new Float32Array(1e7); // Oversized buffer simulation
          gl.bufferData(gl.ARRAY_BUFFER, largeArray, gl.STATIC_DRAW);

          console.log('Buffer data set successfully.');
        } catch (e) {
          console.error('Simulated GPU crash:', e.message);
        }
      }
    }
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '50px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Educational RBI Vulnerability Test</h1>
      <p>
        This page simulates a GPU Compositing or WebGL rendering vulnerability for educational purposes.
      </p>
      <canvas
        id="testCanvas"
        width="500"
        height="500"
        style={{ border: '1px solid black' }}
      ></canvas>
    </div>
  );
}
