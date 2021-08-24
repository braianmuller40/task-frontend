import { Component, Input, OnInit } from '@angular/core';
import { SubTask } from '../../models/subTask.model';
import { SubtaskService } from '../../services/subtask.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-subtask',
  templateUrl: './subtask.component.html',
  styleUrls: ['./subtask.component.css']
})
export class SubtaskComponent implements OnInit {
  @Input() modTarea:any;

  subTaskEdit:any;
  SUBTASKS!:SubTask[];
  paramTask!:number;

  constructor(private SubTaskservice:SubtaskService,private route: ActivatedRoute) { 
    this.subTaskEdit={
      titulo:false,
      subTask:{},
      editStatus:false,
      visible:false
    };
  }

  ngOnInit(): void {
this.route.params.subscribe(params =>{
     this.paramTask = params["id"];
    });
    this.cargarTasks(this.paramTask);
  }

  cerrarVentana(event:any){
    this.subTaskEdit.visible = false;
  }
  nuevaTarea(){
    this.subTaskEdit.editStatus=false;
    this.subTaskEdit.subTask={};
    this.subTaskEdit.visible = true;
    this.subTaskEdit.titulo = false;
  }
  editarTarea(tarea:SubTask){
    this.subTaskEdit.titulo=true;
    this.subTaskEdit.subTask=tarea;
    this.subTaskEdit.editStatus=true;
    this.subTaskEdit.visible=true;
  }
  cargarTasks(id:number){
    setTimeout(() =>
     this.SubTaskservice.getSubTasks(id).then(data => {this.SUBTASKS=data;console.log(this.SUBTASKS)})
     ,100);
  }

  borrarTarea(id:number){
    this.SubTaskservice.deleteSubTask(id).subscribe(result => {this.cargarTasks(this.paramTask)});
  }

}
