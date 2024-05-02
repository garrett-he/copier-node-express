import express from "express";
import HelloRoute from "./routes/hello.route";

export function createApp() {
    const server = express();

    server.use("/hello", HelloRoute());

    return server;
}
