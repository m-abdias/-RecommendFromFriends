import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import ICreatePersonDTO from '../../dtos/person/ICreatePersonDTO';
import people from '../../data/dataPerson';

class CreatePersonService {
  createPerson(data: ICreatePersonDTO, res: Response): void {
    const { cpf, name } = data;
    const generator_id = uuidv4();
  
    const cpfExist = people.find(person => person.cpf === cpf);

    if (cpfExist)  {
      res.status(400).json({ error: 'Já possui cadastro para o CPF informado.' });
      return;
    }

    if (cpf.toString().length !== 11) {
      res.status(400).json({ error: 'CPF Inválido. O CPF informado não possui 11 dígitos, digite um CPF válido' });
      return;
    }
      
    const person = {
      id: generator_id,
      cpf,
      name,
    };
  
    res.status(201).json({ message: 'Cadastro realizado com Sucesso!', person });
  }
  
}

export default CreatePersonService;
