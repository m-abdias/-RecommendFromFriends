import { Router } from 'express';
import PersonController from '../controllers/PersonController';
import CreatePersonService from '../domain/services/person/CreatePersonService';
import GetAllPersonService from '../domain/services/person/GetAllPersonService';
import GetPersonByCpfService from '../domain/services/person/GetPersonByCPFService';
import CleanService from '../domain/services/person/CleanService';

const personRouter = Router();
const createPersonService = new CreatePersonService();
const getAllPersonService = new GetAllPersonService();
const getPersonByCpfService = new GetPersonByCpfService();
const cleanService = new CleanService();
const personController = new PersonController(createPersonService, getAllPersonService, getPersonByCpfService, cleanService);

personRouter.post('/', personController.createPerson.bind(personController));
personRouter.get('/', personController.getAllPerson.bind(personController));
personRouter.get('/:cpf', personController.getCpfList.bind(personController));
personRouter.delete('/clean', personController.clean.bind(personController));

export default personRouter;
