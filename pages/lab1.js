<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Educational Vulnerability Test</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 50px;
        }
    </style>
</head>
<body>
    <h1>Educational RBI Vulnerability Test</h1>
    <p>This page simulates a GPU Compositing or WebGL rendering vulnerability for educational purposes.</p>

    <canvas id="testCanvas" width="500" height="500" style="border: 1px solid black;"></canvas>

    <script>
        console.log("Initializing WebGL...");

        // Attempt to initialize WebGL and simulate GPU-intensive operations
        const canvas = document.getElementById("testCanvas");
        const gl = canvas.getContext("webgl");

        if (!gl) {
            console.error("WebGL not supported on this browser.");
        } else {
            console.log("WebGL initialized successfully.");

            // Simulate a GPU crash scenario with oversized buffers
            try {
                const buffer = gl.createBuffer();
                gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
                const largeArray = new Float32Array(1e7); // Simulate oversized buffer
                gl.bufferData(gl.ARRAY_BUFFER, largeArray, gl.STATIC_DRAW);

                console.log("Buffer data set successfully.");
            } catch (e) {
                console.error("Simulated GPU crash: ", e.message);
            }

            // Log further actions for educational purposes
            console.log("This demonstration does not harm your system.");
        }
    </script>
</body>
</html>
