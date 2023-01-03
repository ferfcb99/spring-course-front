import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule,
    RouterModule, 
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
