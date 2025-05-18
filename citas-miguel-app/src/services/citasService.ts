export class CitasService {
    private citas: Array<{ id: number; fecha: string; hora: string; descripcion: string }> = [];
    private nextId: number = 1;

    public agregarCita(fecha: string, hora: string, descripcion: string): { id: number; fecha: string; hora: string; descripcion: string } {
        const nuevaCita = { id: this.nextId++, fecha, hora, descripcion };
        this.citas.push(nuevaCita);
        return nuevaCita;
    }

    public obtenerCitas(): Array<{ id: number; fecha: string; hora: string; descripcion: string }> {
        return this.citas;
    }

    public eliminarCita(id: number): boolean {
        const index = this.citas.findIndex(cita => cita.id === id);
        if (index !== -1) {
            this.citas.splice(index, 1);
            return true;
        }
        return false;
    }
}