import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task.component';
import { TaskService } from '../../services/task.service';
import { WindowNewtaskComponent } from './components/window-newtask/window-newtask/window-newtask.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    WindowNewtaskComponent,
    TaskComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[
    TaskService
  ]
})
export class TaskModule { }
