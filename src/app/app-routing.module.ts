import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: 'todos', loadChildren: './todos-feature/todo-feature.module#TodoFeatureModule' },
  // { path: 'documents', loadChildren: './document-feature/document-feature.module#DocumentFeatureModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
