const express = require("express");
const app = express();
const db = require("./models");
const PORT = process.env.PORT || 3000;
const cors = require('cors')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`listening on: http://localhost:${PORT}`);
  });
});

const studentApiRoutes = require("./routes/studentApiRoutes");
app.use("/student", studentApiRoutes);