import { NivelPrioridad } from "./enums/prioridad";
import { Status } from "./enums/status";

export class subTask{
    "id": number;
    "titulo": string;
    "fechaCreacion": string;
    "descripcion": string;
    "nivelPrioridad": NivelPrioridad;
    "status": Status;
}