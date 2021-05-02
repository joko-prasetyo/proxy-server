const express = require("express");
const fetch = require("node-fetch");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.get("/:url", async (req, res) => {
  try {
    const url = req.params.url;
    const { headers } = req;
    delete headers["host"];

    const response = await fetch(url, {
      headers,
    });

    res.send(await response.json());
  } catch (e) {
    console.log(e);
    res.status(500).send(e.toString());
  }
});

app.post("/:url", async (req, res) => {
  try {
    const url = req.params.url;
    const { headers, body } = req;
    delete headers["host"];

    const response = await fetch(url, {
      headers,
      body: JSON.stringify(body),
      method: "POST"
    });

    res.send(await response.json());
  } catch (e) {
    console.log(e);
    res.status(500).send(e.toString());
  }
}); 
  
app.listen(PORT);
