import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxGlideModule } from 'ngx-glide';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { TableauComponent } from './pages/tableau/tableau.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    TableauComponent,
    BlogComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxGlideModule,
    LandingPageRoutingModule,
    SharedModule
  ]
})
export class LandingPageModule { }
