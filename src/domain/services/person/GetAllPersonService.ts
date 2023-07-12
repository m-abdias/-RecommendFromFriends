import Person from '../../interfaces/person';

export default class GetAllPersonService {
  getAllPerson(person: Person[]): typeof person {
    return person;
  }
}