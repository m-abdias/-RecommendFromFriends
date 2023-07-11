import { Request, Response } from 'express';
import people from '../../data/dataPerson';

export default class GetPersonByCpfService {
  getCpfList(req: Request, res: Response): void {
    const { cpf } = req.params;
    const person = people.find(person => person.cpf === cpf);

    if (person) {
      res.status(200).json(person);
    } else {
      res.status(404).json({ error: 'CPF não encontrado' });
    }
  }
}
