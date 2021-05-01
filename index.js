const express = require("express");
const fetch = require("node-fetch");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.post("/", async (req, res) => {
  try {
    const { headers, body } = req;
    let options = {
      headers,
      method: "GET",
    };
    const response = await fetch(body.url, options);
    res.send(await response.json());
  } catch (e) {
    res.status(500).send(e);
  }
});

app.listen(PORT);
