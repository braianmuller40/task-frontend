import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SubTask } from 'src/app/@core/models/subTask.model';
import { Task } from 'src/app/@core/models/task.model';
import { SubtaskService } from 'src/app/@core/services/subtask.service';

@Component({
  selector: 'app-window-newsubtask',
  templateUrl: './window-newsubtask.component.html',
  styleUrls: ['./window-newsubtask.component.css']
})
export class WindowNewsubtaskComponent implements OnInit {
  @Output() cerrarVentana = new EventEmitter<boolean>();
  @Output() actualizarLista = new EventEmitter<any>();
  @Input() subTaskEdit:any;
  @Input() paramTask!:number;


  form:FormGroup = new FormGroup({});
  newSubTask!:SubTask;
  localSubTask = new SubTask();
  titulo!:string;

  constructor(private subTaskservice:SubtaskService) {
  }

  ngOnInit(): void {
    this.subTaskEdit.editStatus?this.localSubTask=this.subTaskEdit.subTask:new SubTask();
    this.subTaskEdit.titulo?this.titulo="EDITAR SUBTASK":this.titulo="NEW SUBTASK";
    this.buildForm();
  }
  

  private buildForm() {
    this.form = new FormGroup({
      id: new FormControl(this.localSubTask.id, []),
      titulo: new FormControl(this.localSubTask.titulo, []),
      descripcion: new FormControl(this.localSubTask.descripcion, []),
      nivelPrioridad: new FormControl(this.localSubTask.nivelPrioridad, []),
      status: new FormControl(this.localSubTask.status, []),
      fechaCreacion: new FormControl('', []),
      task: new FormControl('', []),
    });

    this.form.valueChanges
    .subscribe(value => {
      //console.log(value);
    });
  }


  save(event: Event) {
    event.preventDefault();
    const value = this.form.value;
    value.fechaCreacion = new Date().toString();
    value.task = new Task();
    value.task.id=this.paramTask;
    this.newSubTask = value;
    this.subTaskEdit.editStatus?this.subTaskservice.putSubTask(this.newSubTask).subscribe(result => {this.actualizarLista.emit();this.cerrar()}):
    this.subTaskservice.postSubTask(this.newSubTask).subscribe(result => {this.actualizarLista.emit();this.buildForm()});
  }


  cerrar(){
    this.cerrarVentana.emit(false);
  }
  
}
