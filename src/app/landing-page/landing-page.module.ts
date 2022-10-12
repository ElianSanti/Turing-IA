import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxGlideModule } from 'ngx-glide';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { TableauComponent } from '../landing-page/pages/tableau/tableau.component';
import { BlogComponent } from './pages/blog/blog.component';
import { SharedModule } from '../shared/shared.module';
import { GoogleMapsModule } from '@angular/google-maps';
import { TPrepComponent } from './pages/t-prep/t-prep.component';
import { TDesktopComponent } from './pages/t-desktop/t-desktop.component';
import { TCloudComponent } from './pages/t-cloud/t-cloud.component';
import { TServerComponent } from './pages/t-server/t-server.component';
import { TServerManagementComponent } from './pages/t-server-management/t-server-management.component';
import { TDataManagementComponent } from './pages/t-data-management/t-data-management.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    TableauComponent,
    BlogComponent,
    TPrepComponent,
    TDesktopComponent,
    TCloudComponent,
    TServerComponent,
    TServerManagementComponent,
    TDataManagementComponent  
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxGlideModule,
    GoogleMapsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    LandingPageRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class LandingPageModule { }
