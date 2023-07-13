import { Request, Response } from "express";
import CreatePersonService from "../domain/services/person/CreatePersonService";
import GetAllPersonService from "../domain/services/person/GetAllPersonService";
import { v4 as uuidv4 } from "uuid";
import GetPersonByCpfService from "../domain/services/person/GetPersonByCpfService";
import Person from "../domain/interfaces/person";
import { people, flushPeopleDB } from "../../db";

export default class PersonController {
  private createPersonService: CreatePersonService;
  private getAllPersonService: GetAllPersonService;
  private getPersonByCpfService: GetPersonByCpfService;

  constructor(
    createPersonService: CreatePersonService,
    getAllPersonService: GetAllPersonService,
    getPersonByCpfService: GetPersonByCpfService
  ) {
    this.createPersonService = createPersonService;
    this.getAllPersonService = getAllPersonService;
    this.getPersonByCpfService = getPersonByCpfService;
  }

  createPerson(req: Request, res: Response): void {
    try {
      const generator_id = uuidv4();
      if (typeof req.body.cpf === "string" && req.body.cpf.length === 11) {
        const data: Person = {
          id: generator_id,
          cpf: req.body.cpf,
          name: req.body.name,
          relationship: [],
        };
        this.createPersonService.createPerson(data, people, res);
      } else {
        res.status(400).json({
          error:
            "CPF Inválido. O CPF informado não possui 11 dígitos, digite um CPF válido",
        });
      }
    } catch (error: any) {
      res.status(400).json({ error: "Não foi possível criar este cadastro." });
    }
  }

  getAllPerson(req: Request, res: Response): void {
    try {
      const all = this.getAllPersonService.getAllPerson(people);
      res.status(200).json(all);
    } catch (error) {
      res.status(400).json({ error: "Não foi possível listar as pessoas." });
    }
  }

  getCpfList(req: Request, res: Response): void {
    try {
      const cpfList = this.getPersonByCpfService.getCpfList(people, req, res);
      res.status(200).json(cpfList);
    } catch (error) {
      res
        .status(400)
        .json({ error: "Não existe este CPF em nosso banco de dados." });
    }
  }

  clean(req: Request, res: Response): void {
    try {
      flushPeopleDB();
      res
        .status(200)
        .json({ message: "Registros deletados com Sucesso!", people });
    } catch (error) {
      res.status(400).json({ error: "Não foi possível deletar os dados." });
    }
  }
}
