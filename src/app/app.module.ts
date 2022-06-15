import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogINComponent } from './pages/cours/log-in/log-in.component';
import { SingUPComponent } from './pages/cours/sing-up/sing-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { PortfolioComponent } from './pages/portfolio/portfolio/portfolio.component';
import { CoursComponent } from './pages/cours/cours/cours.component';
import { AdminComponent } from './pages/admin/admin/admin.component';
import { CourHeaderComponent } from './components/courComponents/cour-header/cour-header.component';
import { PortfolioHeaderComponent } from './components/portfolioComponents/portfolio-header/portfolio-header.component';
import { HeroSectionComponent } from './components/portfolioComponents/hero-section/hero-section.component';
import { FooterComponent } from './components/communComponents/footer/footer.component';
import { CourHeroComponent } from './components/courComponents/cour-hero/cour-hero.component';
import { CourSectionComponent } from './components/courComponents/cour-section/cour-section.component';
import { CourCardComponent } from './components/courComponents/cour-card/cour-card.component'


@NgModule({
  declarations: [
    AppComponent,
    LogINComponent,
    SingUPComponent,
    PortfolioComponent,
    CoursComponent,
    AdminComponent,
    CourHeaderComponent,
    PortfolioHeaderComponent,
    HeroSectionComponent,
    FooterComponent,
    CourHeroComponent,
    CourSectionComponent,
    CourCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
