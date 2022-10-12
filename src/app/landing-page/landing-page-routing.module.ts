import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { TCloudComponent } from './pages/t-cloud/t-cloud.component';
import { TDataManagementComponent } from './pages/t-data-management/t-data-management.component';
import { TDesktopComponent } from './pages/t-desktop/t-desktop.component';
import { TPrepComponent } from './pages/t-prep/t-prep.component';
import { TServerManagementComponent } from './pages/t-server-management/t-server-management.component';
import { TServerComponent } from './pages/t-server/t-server.component';
import { TableauComponent } from './pages/tableau/tableau.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'services',
        component: ServicesComponent
      },
      {
        path: 'tableau',
        component: TableauComponent
      },
      {
        path: 'blog',
        component: BlogComponent
      },
      {
        path:'t-prep',
        component: TPrepComponent
      },
      {
        path: 't-desktop',
        component: TDesktopComponent
      },
      {
        path: 't-cloud',
        component: TCloudComponent
      },
      {
        path: 't-server',
        component: TServerComponent,
      },
      {
        path: 't-data-management',
        component: TDataManagementComponent
      },
      {
        path: 't-server-management',
        component: TServerManagementComponent
      },
      {
        path: '**',
        redirectTo: 'home'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
