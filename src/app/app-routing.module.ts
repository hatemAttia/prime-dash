import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatComponent } from './modules/stat/stat.component';

const routes: Routes = [
  {
    path:"",component:StatComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
