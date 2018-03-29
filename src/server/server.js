import express from "express";
import mongoose from "./db/mongoose";
import User from "../models/user";

import bodyParser from "body-parser";

class Server {
    constructor() {
        this.app = express();
        this.app.use(bodyParser.json());
    }
    start() {
        this.app.listen(3000, () => {
            console.log("Started on port 3000");
        });
        this.app.get("/", (req, res) => {
            res.send("home page");
        })
        this.app.post('/todos', (req, res) => {
            console.log(req.body);
            res.send({ msg: 'okay' });
        });

        this.app.post("/user", (req, res) => {

            let user = new User({
                userName: req.body.userName,
                email: req.body.email
            });
            console.log("save user");
            user.save().then((user) => {
                res.send(user);
            }, (erro) => {
                res.send({ msg: 'error occur' });
            });
        })
    }
}

export default Server;