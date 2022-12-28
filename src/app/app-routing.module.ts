import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  { path: 'read', component: ReadComponent },
  { path: 'create', component: CreateComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
