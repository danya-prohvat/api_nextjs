import express from "express";
import cors from "cors";
import router from "./router.js";

const PORT = 8080;
const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

app.use(express.json());
app.use("/api", router);
app.get("/ping", (req, res) => {
  res.send("pong 🏓");
});

const start = async () => {
  try {
    app.listen(PORT, () => console.log("Server started on PORT:" + PORT));
  } catch (e) {
    console.log(e);
  }
};

start();
