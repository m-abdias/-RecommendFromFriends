import { Router } from "express";
import bodyParser from "body-parser";
import personRouter from "./person.routes";
import relationshipRouter from "./relationship.routes";
import recommendationsRouter from "./recommendations.routes";

const routes = Router();

routes.use(bodyParser.urlencoded({ extended: true }));
routes.use(bodyParser.json());

routes.use("/person", personRouter);
routes.use("/relationship", relationshipRouter);
routes.use("/recommendations", recommendationsRouter);

routes.get("/health", (req, res) => {
  res.status(200).send({
    status: "OK!",
  });
});

export default routes;
