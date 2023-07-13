import CreatePersonService from "../../../../src/domain/services/person/CreatePersonService";
import { people } from "../../../fake/fakeDataBase";

describe("CreatePersonService", () => {
  const createPersonService = new CreatePersonService();
  let personData: any[];
  let res: any;

  beforeEach(() => {
    personData = people;
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  it("should create a new person", async () => {
    const data = {
      id: "1cacb16c-f4f8-4e63-123-e777652e4568",
      cpf: "55555555555",
      name: "Ângela Aparecida",
      relationship: [],
    };

    await createPersonService.createPerson(data, personData, res as any);

    expect(personData.length).toBe(6);
    expect(personData[5].cpf).toEqual(data.cpf);
    expect(personData[5].name).toEqual(data.name);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({
      message: "Cadastro realizado com Sucesso!",
      newPerson: expect.objectContaining({
        cpf: data.cpf,
        name: data.name,
      }),
    });
  });

  it("should return an error for invalid CPF length", () => {
    const data = {
      id: "1cacb16c-f4f8-4e63-123-e777652e4568",
      cpf: "55555",
      name: "Ângela Aparecida",
      relationship: [],
    };

    createPersonService.createPerson(data, personData, res as any);

    expect(data.cpf.length !== 11).toBe(true);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      error:
        "CPF Inválido. O CPF informado não possui 11 dígitos, digite um CPF válido",
    });
  });

  it("should return an error if the CPF already exists", () => {
    const data = {
      id: "6d924efb-7496-41c6-a64d-7b1b4641b414",
      cpf: "11111111111",
      name: "Luis Felipe Ribeiro",
      relationship: ["22222222222", "12312312311"],
    };

    createPersonService.createPerson(data, personData, res as any);

    expect(personData[0]).toEqual(data);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      error: "Já possui cadastro para o CPF informado.",
    });
  });
});
