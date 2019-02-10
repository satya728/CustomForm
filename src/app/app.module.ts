import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MatFormFieldModule,MatInputModule, MatButtonModule,  MatSelectModule,MatGridListModule } from '@angular/material';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MyFormComponent } from './my-form.component';
import { Custom } from './custom.interface';
@NgModule({
  imports:      [ BrowserModule,BrowserAnimationsModule, FormsModule,ReactiveFormsModule,MatFormFieldModule,MatInputModule,MatButtonModule,  MatSelectModule,MatGridListModule ],
  declarations: [ AppComponent, HelloComponent,MyFormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
