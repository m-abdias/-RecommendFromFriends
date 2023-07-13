import GetAllPersonService from "../../../../src/domain/services/person/GetAllPersonService";
import { people } from "../../../fake/fakeDataBase";

describe("GetAllPersonService", () => {
  const getAllPersonService = new GetAllPersonService();
  let personData: any[];

  beforeEach(() => {
    personData = people;
  });

  it("should return get all people", async () => {
    const result = getAllPersonService.getAllPerson(personData);

    expect(result).toEqual(personData);
  });
});
