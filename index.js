const express = require("express");
const fetch = require("node-fetch");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.use((req, res, next) => {
  res.set("Content-Type", "application/json");
  res.set("Accept", "application/json");
  return next();
});

app.post("/", async (req, res) => {
  try {
    const { headers, body } = req;
    console.log(req.headers);
    const response = await fetch(body.url, {
      headers,
      method: body.method
    });
    res.send(await response.json());
  } catch (e) {
    console.log(e);
    res.status(500).send(e.toString());
  }
});

app.listen(PORT);
