const express = require("express");
const fetch = require("node-fetch");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.post("/", async (req, res) => {
  try {
    const { headers, body } = req;
    console.log(req.headers);
    let options = {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; Rigor/1.0.0; http://rigor.com)",
        Accept: "*/*",
        "Content-Type": "application/json",
      },
      method: "GET",
    };

    const response = await fetch(body.url, options);
    res.send(await response.json());
  } catch (e) {
    console.log(e);
    res.status(500).send(e.toString());
  }
});

app.listen(PORT);
