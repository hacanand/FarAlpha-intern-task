import express from "express";
const app = express();

app.get("/sayHello", (_, res) => {
 
  res.json({
    message: "Hello User ! Welcome to Test API" });
});

 
app.listen(5000, () => {
  console.log("Server is running on port 5000");
}
)

 