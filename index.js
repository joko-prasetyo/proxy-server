const express = require("express");
const fetch = require("node-fetch");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.post("/", async (req, res) => {
  try {
    const { headers } = req;
    const { method, url } = req.body;
    let options = {
      headers,
      method,
    };

    delete headers["host"];

    const response = await fetch(url, options);
    res.send(await response.json());
  } catch (e) {
    console.log(e);
    res.status(500).send(e.toString());
  }
});

app.listen(PORT);
