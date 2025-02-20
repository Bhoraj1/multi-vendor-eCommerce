var express = require("express");

app = express();
app.get("/", (req, res) => {
  res.send("Hellow express js");
});




const PORT = 8000;

app.listen(PORT, () => {
  console.log(`server running successfully on http://localhost:${PORT}`);
});
