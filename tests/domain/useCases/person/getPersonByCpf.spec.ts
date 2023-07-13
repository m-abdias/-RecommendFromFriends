import GetPersonByCpfService from "../../../../src/domain/services/person/GetPersonByCpfService";
import { people } from "../../../fake/fakeDataBase";

describe("GetPersonByCpfService", () => {
  const getPersonByCpfService = new GetPersonByCpfService();
  let personData: any[];
  let req: any;
  let res: any;


  beforeEach(() => {
    personData = people;
    req = {
      params: {
        cpf: "11111111111",
      },
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  it("should return the person with the given CPF", () => {
    getPersonByCpfService.getCpfList(personData, req as any, res as any);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        id: "6d924efb-7496-41c6-a64d-7b1b4641b414",
        cpf: "11111111111",
        name: "Luis Felipe Ribeiro",
        relationship: ["22222222222", "12312312311"],
      })
    );
  });

  it("should return an error if the CPF is not found", () => {
    req.params.cpf = "99999999999";

    getPersonByCpfService.getCpfList(personData, req as any, res as any);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ error: "CPF não encontrado" });
  });
});
