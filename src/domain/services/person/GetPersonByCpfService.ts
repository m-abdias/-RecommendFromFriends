import { Request, Response } from "express";
import Person from "../../interfaces/person";

export default class GetPersonByCpfService {
  getCpfList(person: Person[], req: Request, res: Response): void {
    const { cpf } = req.params;
    const cpfExists = person.find((person) => person.cpf === cpf);
    if (cpfExists) {
      res.status(200).json(cpfExists);
    } else {
      res.status(404).json({ error: "CPF não encontrado" });
    }
  }
}
