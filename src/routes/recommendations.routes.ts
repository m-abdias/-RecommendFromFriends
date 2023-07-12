import { Router } from "express";
import RecommendationsController from "../controllers/RecommendationsController";
import GetRecommendationsByCpfService from "../domain/services/recommendations/GetRecommendationsByCpfService";
import { people } from "../../db";

const recommendationsRouter = Router();
const getRecommendationsByCpfService = new GetRecommendationsByCpfService(
  people
);
const recommendationsController = new RecommendationsController(
  getRecommendationsByCpfService
);

recommendationsRouter.get("/:cpf", (req, res) => {
  const cpf = req.params.cpf;
  const recommendations = recommendationsController.getRecommendationsByCpf(
    cpf,
    res
  );
  res.json(recommendations);
});

export default recommendationsRouter;
