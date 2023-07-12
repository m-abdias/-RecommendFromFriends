import { Response } from 'express';
import Person from '../../interfaces/person';

export default class CleanService {
  clean(person: Person[], res: Response): Person[] {
    person = [];
    return person;
  }
}