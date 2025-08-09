import express = require("express");
import path = require("path");

const app = express();
const PORT = 3000;

// Serve static files from public/
app.use(express.static(path.join(__dirname, "./public")));

// Serve index.html for root path
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
