import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TaskComponent } from './@core/pages/task/task.component';
import { WindowNewtaskComponent } from './@core/pages/task/components/window-newtask/window-newtask/window-newtask.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskModule } from './@core/pages/task/task.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    TaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
