import express from "express";
const app = express();

app.get("/sayHello", (req, res) => {
  //send json response
  res.json({ message: "Hello User!" });
});

app.listen(80, () => {
  console.log("Server is running on port 80");
}
)

//port 80 is used for http requests so sudo is required to run the server on port 80 --> sudo node index.js to run the server