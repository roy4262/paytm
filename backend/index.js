require("dotenv").config({ path: require("path").join(__dirname, ".env") });

const express = require("express");
const app = express();
const cors = require("cors");

const { UserModel } = require("./db");

app.use(cors());
app.use(express.json());

const rootRouter = require("./routes/index");

app.use("/api/v1", rootRouter);

app.listen(4000, () => console.log("backend running on port 4000"));
