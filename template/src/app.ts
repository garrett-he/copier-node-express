import bodyParser from "body-parser";
import express from "express";

import HelloRoute from "./routes/hello.route";

export function createApp() {
    const app = express();
    app.use(bodyParser.json());

    app.use("/hello", HelloRoute());

    return app;
}
