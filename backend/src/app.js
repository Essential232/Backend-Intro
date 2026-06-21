import express from "express";
import UserRoute from "./route/users.js"






const app = express();

app.use(express.json());

app.use("./api/users",UserRoute);


export default app;