import { NivelPrioridad } from "./enums/prioridad";
import { Status } from "./enums/status";
import { Task } from "./task.model";

export class SubTask{
    "id": number;
    "titulo": string;
    "fechaCreacion": string;
    "descripcion": string;
    "nivelPrioridad": NivelPrioridad;
    "status": Status;
    "task" : Task;
}