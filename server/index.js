const express = require("express");
let app = express();
const bodyparser = require("body-parser");
let port = 3009;

app.use(bodyparser.json());
app.use(express.static(__dirname + "/../client/dist"));

app
  .route("/customer-reviews")
  .get((req, res) => {
    request("https://localhost:3008", (err, res, body) => {
      if (err) {
        console.log(err);
      } else {
        res.send(body);
      }
    });
  })
  .post((req, res) => {});

app
  .route("/carousel")
  .get((req, res) => {
    request("https://localhost:3007", (err, res, body) => {
      if (err) {
        console.log(err);
      } else {
        res.send(body);
      }
    });
  })
  .post((req, res) => {});

app
  .route("/image-gallery")
  .get((req, res) => {
    request("https://localhost:3006", (err, res, body) => {
      if (err) {
        console.log(err);
      } else {
        res.send(body);
      }
    });
  })
  .post((req, res) => {});

app
  .route("/navbar")
  .get((req, res) => {
    request("https://localhost:3005", (err, res, body) => {
      if (err) {
        console.log(err);
      } else {
        res.send(body);
      }
    });
  })
  .post((req, res) => {});


app.listen(port, () => console.log(`Now listening on ${port}`));
