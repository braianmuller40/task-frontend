import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TaskComponent } from './@core/pages/task/task.component';
import { WindowNewtaskComponent } from './@core/pages/task/components/window-newtask/window-newtask/window-newtask.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    WindowNewtaskComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
