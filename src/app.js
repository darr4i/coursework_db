'use strict';

const express = require("express");
const cors = require("cors");
const router = require("./routes");
const AppError = require("./utils/appError");
const errorHandler = require("./utils/errorHandler");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", router);

app.all("*", (req, res, next) => {
    res.status(404).json({
        status: "error",
        message: `Cannot find ${req.originalUrl} on this server!`
    });
});

app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`);
   });

module.exports = app;



