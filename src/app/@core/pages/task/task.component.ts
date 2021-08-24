import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() modTask:any;
  @Input() modTarea:any;

  taskEdit:any;
  TASKS!:Task[];

  constructor(private taskService:TaskService) { 
    this.taskEdit={
      titulo:false,
      task:{},
      editStatus:false,
      visible:false
    };
  }

  ngOnInit(): void {
    this.cargarTasks();
  }

  cerrarVentana(event:any){
    this.taskEdit.visible = false;
  }
  nuevaTarea(){
    this.taskEdit.editStatus=false;
    this.taskEdit.task={};
    this.taskEdit.visible = true;
  }
  editarTarea(tarea:Task){
    this.taskEdit.titulo=true;
    this.taskEdit.task=tarea;
    this.taskEdit.editStatus=true;
    this.taskEdit.visible=true;
  }
  cargarTasks(){
    setTimeout(() =>
     this.taskService.getTasks().then(data => {this.TASKS=data})
     ,100);
  }

  borrarTarea(id:number){
    this.taskService.deleteTask(id).subscribe(result => {this.cargarTasks()});
  }


}
