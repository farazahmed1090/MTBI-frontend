import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ResultPageComponent } from './result-page/result-page.component';

const routes: Routes = [{
  path: '', component: LoginRegisterComponent,
}, {
  path: 'home', component: HomePageComponent,
}, {
  path: 'result-page', component: ResultPageComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
