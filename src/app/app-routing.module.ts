import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CallDashComponent } from './call-dash/call-dash.component';


const routes: Routes = [
  { path: 'call-dash', component: CallDashComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
