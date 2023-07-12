import { Router } from 'express';
import RelationshipController from '../controllers/RelationshipController';
import CreateRelationshipService from '../domain/services/relationship/CreateRelationshipService';

const relationshipRouter = Router();
const createRelationshipService = new CreateRelationshipService();
const relationshipController = new RelationshipController(createRelationshipService);

relationshipRouter.post('/', (req, res) => {
  relationshipController.createRelationship(req, res);
});

export default relationshipRouter;
