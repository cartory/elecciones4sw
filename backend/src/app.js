const cors = require('cors');
const morgan = require('morgan');
const express = require('express');

const router = require("./api.routes");
const sequelize = require("./database/sequelize");

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

    start(HOST = process.env.HOST, PORT = process.env.PORT) {
        this.app.listen(PORT, () => {
            console.log(`Server running on \x1b[33mhttp://${HOST}:${PORT}\x1b[0m`);
            console.log(new Date());
        });
        this.connectDB();
    }

    connectDB() {
        sequelize
            .authenticate()
            .then(() => {
                console.log(`\x1b[32mDB Connected Successfully!!\x1b[0m`);
            })
            .catch((error) => {
                console.error(error);
            });
    }
}

new App().start();