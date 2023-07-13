import CreateRelationshipService from "../../../../src/domain/services/relationship/CreateRelationshipService";
import { people } from "../../../fake/fakeDataBase";

describe("CreateRelationshipService", () => {
  const createRelationshipService = new CreateRelationshipService();
  let personData: any[];
  let res: any;

  beforeEach(() => {
    personData = people;
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  it("should create a relationship between two persons", () => {
    const data = {
      cpf1: "11111111111",
      cpf2: "22222222222",
    };

    createRelationshipService.createRelationship(data, personData, res as any);

    const person1 = personData.find((person) => person.cpf === data.cpf1);
    const person2 = personData.find((person) => person.cpf === data.cpf2);

    expect(person1?.relationship).toContain(data.cpf2);
    expect(person2?.relationship).toContain(data.cpf1);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ message: "Relacionamento criado com sucesso!" });
  });

  it("should return an error if either person does not exist", () => {
    const data = {
      cpf1: "55555555555",
      cpf2: "33333333333",
    };

    createRelationshipService.createRelationship(data, personData, res as any);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ error: "Usuário não existe" });
  });
});
