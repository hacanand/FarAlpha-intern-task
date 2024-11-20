import express from "express";
const app = express();

app.get("/sayHello", (req, res) => {
  //send json response
  res.json({ message: "Hello User! hi how are you" });
});

app.get("/api", (req, res) => {
  //send json response
  res.json({ message:  "Welcome to the API!" });
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
}
)

//port 80 is used for http requests so sudo is required to run the server on port 80 --> sudo node index.js to run the server