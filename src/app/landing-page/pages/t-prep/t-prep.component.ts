import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-t-prep',
  templateUrl: './t-prep.component.html',
  styleUrls: ['./t-prep.component.css']
})
export class TPrepComponent implements OnInit {

  isShow!:boolean;

  scrollValue = 200;
  @HostListener('window:scroll')
  checkScroll(){
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    // console.log(scrollPosition)
    this.showNavbar(scrollPosition);
  }

  constructor() { }

  ngOnInit(): void {
  }

  showNavbar(scrollPosition:number){
    if (scrollPosition >= this.scrollValue) {
      this.scrollValue = scrollPosition;
      this.isShow = true;
    } else {
      this.scrollValue = scrollPosition;
      this.isShow = false;
    }
  }
}
