const cors = require('cors');
const morgan = require('morgan');
const express = require('express');

const router = require("./api.routes");
const { host, port } = require("../config.json");

class App {
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config() {
        this.app.use(cors());
        this.app.use(morgan("dev"));
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }

    routes() {
        this.app.use("/api", router);
        this.app.get("/", (req, res) => {
            res.send(`<h1>Welcome to Elections4SW!!</h1>`);
        });
    }

    start(HOST = host, PORT = port) {
        this.app.listen(PORT, () => {
            console.log(`Server running on \x1b[33mhttp://${HOST}:${PORT}\x1b[0m`);
            console.log(new Date());
        });
    }
}

new App().start();