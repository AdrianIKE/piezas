import {Router} from 'express';
import { hola,nombreA,persona} from '../controllers/piezas.controller.js';
const router = Router();
//HTTP <- Framework 
//req -> Request res -> Response
router.get('/api/hola',hola);

router.get('/api/:nombre/:apellido',nombreA);

router.post('/api/persona',persona);


//GET -> Obtener datos 
//router.post();
//router.put();
//router.delete();

export default router;

/*npx sequelize-auto -h containers-us-west-107.railway.app  -d railway  -u postgres -x S79fEpCTeqvBoMN3CXyX  -p 6822 -s public  --dialect postgres -o ./src/models  -l esm*/
