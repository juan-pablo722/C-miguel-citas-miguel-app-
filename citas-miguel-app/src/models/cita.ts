export class Cita {
    id: number;
    fecha: Date;
    hora: string;
    descripcion: string;

    constructor(id: number, fecha: Date, hora: string, descripcion: string) {
        this.id = id;
        this.fecha = fecha;
        this.hora = hora;
        this.descripcion = descripcion;
    }
}