import { Router } from 'express';
import { UserController } from '../controller/user.controller';
import { UserUseCase } from '../../application/userUseCase';
import { MongoRepository } from '../repository/mongo.repository';

const route = Router();

//iniciamos el repositorio
const mongoRepository = new MongoRepository();

//iniciamos casos de uso
const userUseCase = new UserUseCase(mongoRepository);

//Iniciar el repositorio
const userCtrl = new UserController(userUseCase);

//definimos las rutas
route.post('/', userCtrl.insertController);
route.get('/', userCtrl.getController);

export default route;
