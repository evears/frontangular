import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibroComponent } from './components/libro/libro.component';
import { AddLibroComponent } from './components/libro/add-libro.component';
import { FormsModule } from '@angular/forms';
import { EditLibroComponent } from './components/libro/edit-libro.component';

@NgModule({
  declarations: [
    AppComponent,
    LibroComponent,
    AddLibroComponent,
    EditLibroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
