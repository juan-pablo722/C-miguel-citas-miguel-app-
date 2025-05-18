import { Router } from 'express';
import CitasController from '../controllers/citasController';

const router = Router();
const citasController = new CitasController();

export function setCitasRoutes(app) {
    app.use('/api/citas', router);
    
    router.post('/', citasController.crearCita.bind(citasController));
    router.get('/', citasController.obtenerCitas.bind(citasController));
    router.delete('/:id', citasController.eliminarCita.bind(citasController));
}