import express from "express";
const app = express();

app.get("/sayHello", (req, res) => {
  //send json response
  res.json({ message: "Hello User!" });
});

app.get("/sayHello/:name", (req, res) => {
  //send json response
  res.json({ message: `Hello ${req.params.name}!` });
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
}
)

//port 80 is used for http requests so sudo is required to run the server on port 80 --> sudo node index.js to run the server