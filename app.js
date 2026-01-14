const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

const router = require("./routes/rickandmortyRoutes");

app.use(cors());

app.use("/characters", router);

app.listen(PORT, () => console.log(`Express está escuchando en el puerto http://localhost:${PORT}`));