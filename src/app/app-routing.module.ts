import { CoursComponent } from './pages/cours/cours/cours.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogINComponent } from './pages/cours/log-in/log-in.component';
import { SingUPComponent } from './pages/cours/sing-up/sing-up.component';
import { PortfolioComponent } from './pages/portfolio/portfolio/portfolio.component';

const routes: Routes = [
  {
    path:'' , component : LogINComponent 
  } ,
  {
    path: 'singUp' , component : SingUPComponent
  } , 
  {
    path: 'portfolio' , component : PortfolioComponent
  }, {
    path: 'cour' , component : CoursComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
