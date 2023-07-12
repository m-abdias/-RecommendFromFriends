import { Request, Response } from "express";
import CreateRelationshipService from "../domain/services/relationship/CreateRelationshipService";
import ICreateRelationshipDTO from "../domain/dtos/relationship/ICreateRelationshipDTO";
import { people } from "../../db";

export default class PersonController {
  private createRelationshipService: CreateRelationshipService;

  constructor(createRelationshipService: CreateRelationshipService) {
    this.createRelationshipService = createRelationshipService;
  }

  async createRelationship(req: Request, res: Response): Promise<void> {
    try {
      const { cpf1, cpf2 } = req.body as ICreateRelationshipDTO;
      await this.createRelationshipService.createRelationship(
        { cpf1, cpf2 },
        people,
        res
      );
    } catch (error) {
      res
        .status(404)
        .json({ error: "Não foi possível criar relação com usuário" });
    }
  }
}
