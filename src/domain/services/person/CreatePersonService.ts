import { Response } from "express";
import { v4 as uuidv4 } from "uuid";
import ICreatePersonDTO from "../../dtos/person/ICreatePersonDTO";
import Person from "../../interfaces/person";

class CreatePersonService {
  async createPerson(data: ICreatePersonDTO, person: Person[], res: Response): Promise<void> {
    const { cpf, name } = data;
    const generator_id = uuidv4();

    const cpfExists = person.some(obj => obj.cpf === cpf);

    if (cpf.toString().length !== 11) {
      res
        .status(400)
        .json({
          error:
            "CPF Inválido. O CPF informado não possui 11 dígitos, digite um CPF válido",
        });
      return;
    } else if(!cpfExists) {
      const newPeople = {
        id: generator_id,
        cpf,
        name,
        relationship: []
      };
      person.push(newPeople);
      res
        .status(201)
        .json({ message: "Cadastro realizado com Sucesso!", newPeople });
      return
    } else {
      res
      .status(400)
      .json({ error: "Já possui cadastro para o CPF informado." });
    return;
    }

  }
}

export default CreatePersonService;
