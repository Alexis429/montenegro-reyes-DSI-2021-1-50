import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PanelAdminComponent } from './components/panel-admin/panel-admin.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'login', component: PanelAdminComponent},
  

  {path: '**', redirectTo:'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
