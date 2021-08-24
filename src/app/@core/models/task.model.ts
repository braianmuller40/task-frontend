import { NivelPrioridad } from "./enums/prioridad";
import { Status } from "./enums/status";
import { subTask } from "./subTask.model";

export class Task {
    "id": number;
    "titulo": string;
    "fechaCreacion": string;
    "descripcion": string;
    "nivelPrioridad": NivelPrioridad;
    "status": Status;
}