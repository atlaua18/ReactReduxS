import express from "express";
import ReactDOM from "react-dom/server";
import { App } from "../App";
import { indexTemplate } from "./indexTemplate";
import { useDispatch } from "react-redux";
// const express = require('express');
import axios from "axios";
import thunk from "redux-thunk";

const app = express();

app.use("/static", express.static("./dist/client"));

app.get("/", (req, res) => {
    res.send(indexTemplate(ReactDOM.renderToString(App())));
});

app.get("/auth", (req, res) => {
    axios.post(
        "https://www.reddit.com/api/v1/access_token",
        `grant_type=authorization_code&code=${req.query.code}&redirect_uri=http://localhost:3000/auth`,
        {
            auth: { username: process.env.CLIENT_ID, password: "oT_f4f8o9lxUYggG5Wq4Ws9dg73UBQ" },
            headers: { 'Content-type': 'application/x-www-form-urlencoded' },
        }
    )
    .then(({ data }) => {
        res.send(
            indexTemplate(ReactDOM.renderToString(App()), data['access_token'])
        );
    })
    .catch(console.log);
    // res.send(
    //             indexTemplate(ReactDOM.renderToString(App()), data['access_token'])
    //         );
});

app.listen(3000, () => {
    console.log("Server started on http://localhost:3000");
});
