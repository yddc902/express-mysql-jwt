const express = require("express");
const cors = require("cors");
const { ENV } = require("./utils");
const { authRouter } = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRouter);

const PORT = ENV.PORT;
app.listen(PORT, async () => {
  try {
    console.log(`Server is running on port ${PORT}`);
  } catch (error) {
    console.log(error);
  }
});
