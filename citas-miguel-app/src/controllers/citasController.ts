export class CitasController {
    private citasService: any; // Se debe importar y definir el tipo correcto

    constructor(citasService: any) { // Se debe importar y definir el tipo correcto
        this.citasService = citasService;
    }

    public async crearCita(req: any, res: any): Promise<void> {
        try {
            const nuevaCita = req.body;
            const citaCreada = await this.citasService.agregarCita(nuevaCita);
            res.status(201).json(citaCreada);
        } catch (error) {
            res.status(500).json({ mensaje: 'Error al crear la cita', error });
        }
    }

    public async obtenerCitas(req: any, res: any): Promise<void> {
        try {
            const citas = await this.citasService.obtenerCitas();
            res.status(200).json(citas);
        } catch (error) {
            res.status(500).json({ mensaje: 'Error al obtener las citas', error });
        }
    }

    public async eliminarCita(req: any, res: any): Promise<void> {
        try {
            const { id } = req.params;
            await this.citasService.eliminarCita(id);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ mensaje: 'Error al eliminar la cita', error });
        }
    }
}