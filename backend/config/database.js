const mongoose = require("mongoose");
require("dotenv").config({ path: "./config/config.env" });

exports.connectDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then((con) => console.log(`Database Connected: ${con.connection.host}`))
    .catch((err) => console.log("not connectDatabase"));
};
