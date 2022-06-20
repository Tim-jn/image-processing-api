import express from "express";
import images from "./api/image";
const routes = express.Router();

routes.get("/", images);

export default routes;
