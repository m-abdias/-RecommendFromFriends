import { Request, Response } from "express";
import CreatePersonService from "../domain/services/person/CreatePersonService";
import GetAllPersonService from "../domain/services/person/GetAllPersonService";
import { v4 as uuidv4 } from 'uuid';
import ICreatePersonDTO from "../domain/dtos/person/ICreatePersonDTO";
import GetPersonByCpfService from "../domain/services/person/GetPersonByCPFService";

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

      if (typeof req.body.cpf === 'string' && req.body.cpf.length === 11) {
        const data: ICreatePersonDTO = {
          cpf: req.body.cpf,
          name: req.body.name,
          id: generator_id,
        };
  
        this.createPersonService.createPerson(data, res);
      } else {
        res.status(400).json({ error: 'CPF Inválido. O CPF informado não possui 11 dígitos, digite um CPF válido' });
      }
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }
  
  
  getAllPerson(req: Request, res: Response): void {
    try {
      const people = this.getAllPersonService.getAllPerson();
      res.status(200).json(people);
    } catch (error) {
      res.status(500).json({ error: "Failed to get all persons" });
    }
  }

  getCpfList(req: Request, res: Response): void {
    try {
      const cpfList = this.getPersonByCpfService.getCpfList(req, res);
      res.status(200).json(cpfList);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve CPF list' });
    }
  }
}
