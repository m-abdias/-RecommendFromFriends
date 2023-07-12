import { Request, Response } from "express";
import GetRecommendationsByCpfService from "../domain/services/recommendations/GetRecommendationsByCpfService";
import { people } from "../../db";

export default class PersonController {
  private getRecommendationsByCpfService: GetRecommendationsByCpfService;

  constructor(getRecommendationsByCpfService: GetRecommendationsByCpfService) {
    this.getRecommendationsByCpfService = getRecommendationsByCpfService;
  }

  getRecommendationsByCpf(cpf: string, res: Response) {
    try {
      const recommendations =
        this.getRecommendationsByCpfService.getRecommendationsByCpf(cpf, res);
      res.status(200).json(recommendations);
    } catch (error) {
      res
        .status(400)
        .json({ error: "Não foi possível listar as recomendações." });
    }
  }
}
