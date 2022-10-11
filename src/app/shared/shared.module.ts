import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ErrorPageComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    ErrorPageComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
