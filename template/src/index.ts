import {createApp} from "./app";

const port = process.env.API_PORT || 3000;

createApp().listen(port);
