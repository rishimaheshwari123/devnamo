const express = require("express");
const dotenv = require("dotenv");
const connetDB = require("./config/db")
// const cors = require("cors");

dotenv.config();

connetDB();

const app = express();
// app.use(cors);
app.use(express.json());

// route 
app.use("/api/v1/user", require("./routes/userRoute"));

const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log(`Server is running on port no ${process.env.PORT}`);
})