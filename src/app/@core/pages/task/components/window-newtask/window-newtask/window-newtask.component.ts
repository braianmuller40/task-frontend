import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskService } from 'src/app/@core/services/task.service';
import { Task } from 'src/app/@core/models/task.model';
@Component({
  selector: 'app-window-newtask',
  templateUrl: './window-newtask.component.html',
  styleUrls: ['./window-newtask.component.css']
})
export class WindowNewtaskComponent implements OnInit {
  @Output() cerrarVentana = new EventEmitter<boolean>();
  @Output() actualizarLista = new EventEmitter<any>();
  @Input() taskEdit:any;


  form:FormGroup = new FormGroup({});
  newTask!:Task;
  localTask = new Task();

  constructor(private taskService:TaskService) {
  }

  ngOnInit(): void {
    this.taskEdit.editStatus?this.localTask=this.taskEdit.task:new Task();
    this.buildForm();
  }
  

  private buildForm() {
    this.form = new FormGroup({
      id: new FormControl(this.localTask.id, []),
      titulo: new FormControl(this.localTask.titulo, []),
      descripcion: new FormControl(this.localTask.descripcion, []),
      nivelPrioridad: new FormControl(this.localTask.nivelPrioridad, []),
      status: new FormControl(this.localTask.status, []),
      fechaCreacion: new FormControl('', []),
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
    this.newTask = value;
    this.taskEdit.editStatus?this.taskService.putTask(this.newTask).subscribe(result => {this.actualizarLista.emit();this.cerrar()}):
    this.taskService.postTask(this.newTask).subscribe(result => {this.actualizarLista.emit()});
  }


  cerrar(){
    this.cerrarVentana.emit(false);
  }
  
}
