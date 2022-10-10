import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ErrorPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    ErrorPageComponent
  ]
})
export class SharedModule { }
