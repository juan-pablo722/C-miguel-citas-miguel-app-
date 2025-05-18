export interface Cita {
    id: string;
    fecha: string;
    hora: string;
    descripcion: string;
}

export interface CitasResponse {
    citas: Cita[];
    total: number;
}