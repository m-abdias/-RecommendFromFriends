import people from '../../data/dataPerson'

export default class GetAllPersonService {
  getAllPerson(): typeof people {
    return people;
  }
}