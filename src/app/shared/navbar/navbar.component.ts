import { style } from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input, OnDestroy, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnDestroy {

  checked!:boolean;

  @Input('isShow') isShow!:boolean;
  @Input('scrollValue') scrollValue!:number;
  @Input('contactUs') contactUs!:HTMLElement;

  constructor(  @Inject(DOCUMENT) private document: Document, 
                private renderer: Renderer2 ) { }
  
  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, 'noscroll');
  }
  
  showNavbar(){
    return (this.isShow) ? '-10rem' : '0px'
  }

  changeNavbar(){
    return (this.scrollValue >= 659) ? 'navbarScroll' : '';
  }
  
  
  // noScroll(){
  //   if (this.checked) {
  //     this.renderer.addClass(this.document.body, 'noscroll');
  //   }else{
  //     this.renderer.removeClass(this.document.body, 'noscroll');
  //   }
  // }
  
  scrollToContact(){
    this.contactUs.scrollIntoView({behavior:'smooth'})
  }


}


