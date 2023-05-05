import {Router} from 'express';
import {getPiezas,createPiezas,changePiezas,deletePiezas,getPiezasCategoria} from '../controllers/piezas.controller.js';
const router = Router();
//HTTP <- Framework 
//req -> Request res -> Response

router.get('/api/getPiezas',getPiezas);
router.get('/api/getPiezas/categoria',getPiezasCategoria);
router.post('/api/createPieza',createPiezas);
router.put('/api/changePiezas/:id',changePiezas);
router.delete('/api/deletePiezas/:id',deletePiezas);


//GET -> Obtener datos 
//router.post();
//router.put();
//router.delete();

export default router;
