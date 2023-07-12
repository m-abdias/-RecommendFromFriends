import { Response } from "express";
import ICreateRelationshipDTO from "../../dtos/relationship/ICreateRelationshipDTO";
import Person from "../../interfaces/person";

class CreateRelationshipService {
  async createRelationship(
    data: ICreateRelationshipDTO,
    person: Person[],
    res: Response
  ): Promise<void> {
    const { cpf1, cpf2 } = data;

    const person1 = person.find((cpfExists) => cpfExists.cpf === cpf1);
    const person2 = person.find((cpfExists) => cpfExists.cpf === cpf2);

    if (!person1 || !person2) {
      res.status(404).json({ error: "Usuário não existe" });
      return
    }

    if (person1 && person2) {
      person1.relationship.push(cpf2);
      person2.relationship.push(cpf1);
    }
    res.status(201).json({ message: "Relacionamento criado com sucesso!" });
  }
}

export default CreateRelationshipService;
