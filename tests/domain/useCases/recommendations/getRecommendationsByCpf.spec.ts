import GetRecommendationsByCpfService from "../../../../src/domain/services/recommendations/GetRecommendationsByCpfService";
import { people } from "../../../fake/fakeDataBase";

describe("GetRecommendationsByCpfService", () => {
  const getRecommendationsByCpfService = new GetRecommendationsByCpfService(people);
  let personData: any[];
  let res: any;

  beforeEach(() => {
    personData = people;
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });
  it("should return recommendations for the given CPF", () => {
    const cpf = "11111111111";

    const result = getRecommendationsByCpfService.getRecommendationsByCpf(
      cpf,
      res as any
    );

    expect(result).toEqual(["33333333333"]);
    expect(res.status).not.toHaveBeenCalled();
    expect(res.json).not.toHaveBeenCalled();
  });

  it("should return an error if the CPF is invalid", () => {
    const cpf = "123";

    getRecommendationsByCpfService.getRecommendationsByCpf(
      cpf,
      res as any
    );

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      error:
        "CPF Inválido. O CPF informado não possui 11 dígitos, digite um CPF válido",
    });
  });

  it("should return an error if the CPF is not found in the data", () => {
    const cpf = "99999999999";

    getRecommendationsByCpfService.getRecommendationsByCpf(
      cpf,
      res as any
    );

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      error: "Não existe em nossos dados cadastro para o CPF informado.",
    });
  });
});
