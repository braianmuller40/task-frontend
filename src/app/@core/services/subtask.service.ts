import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SubTask } from '../models/subTask.model';

@Injectable({
  providedIn: 'root'
})
export class SubtaskService {

  URL = environment.URL_API2;
  task: SubTask;

  constructor(
    private http: HttpClient
  ) { 
    this.task = new SubTask();
  }

  /* 
    Conexión con la base de datos para crear el CRUD
    'C: Create (crear)'; 'R: Read (leer)'; 'U: Update (actualizar)'; 'R: Remove (borrar)'  
    el crud utiliza en este caso el protocolo http por lo cual se aplican metodos los http correspondientes
  */

  // Crear Tarea
  postSubTask(task: SubTask) {
    return this.http.post(this.URL,task);
  }

  getSubTasks(id:number) {
    return this.http.get<any>(this.URL + `/findSubTaskofTask/${id}`)
    .toPromise()
    .then(res => <SubTask[]>res.data)
    .then(data => { return data; });
}

  // Obtener una sola tarea
  getSubTask(task: SubTask, id: number) {
    return this.http.get<SubTask[]>(this.URL + `/${id}`)
  } 

  // Actualizar datos de la tarea
  putSubTask(task: SubTask) {
    return this.http.put(this.URL + `/${task.id}`, task);
  }


  // Eliminar tarea
  deleteSubTask(id: number) {
    return this.http.delete(this.URL + `/${id}`);
  }

}
