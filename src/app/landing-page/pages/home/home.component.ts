import { Component, HostListener, OnInit } from '@angular/core';
import { ClientStorie } from '../../interfaces/clientHistory.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  clients:ClientStorie[]=[
    {
      nameClient: 'Mondelez Internacional',
      img: 'https://www.turing-ia.com/assets/img/mondelezteaser.jpg',
      history:'Mondelez International digitaliza la adquisición para integrar más de 160 campos de datos, 28 000proveedores y generarmillones en ahorro de costos'
    },
    {
      nameClient:'JPMorgan Chase & Co.',
      img:'https://www.turing-ia.com/assets/img/header_jpmc_1.jpg',
      history:'JPMorgan Chase elige Tableau para ofrecer análisis de autoservicio y seguir el vertiginoso ritmo delos cambios en elsector'
    },
    {
      nameClient: 'Grupo-Petersen',
      img:'https://www.turing-ia.com/assets/img/grupopetersenfallback.jpg',
      history:'Grupo Petersen crea una cultura de datos con Tableau'
    }
  ]

  isShow!:boolean;

  scrollValue = 200;
  
  @HostListener('window:scroll')
  checkScroll(){
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    
    console.log(scrollPosition)

    if (scrollPosition >= this.scrollValue) {
      this.scrollValue = scrollPosition;
      this.isShow = true;
    } else {
      this.scrollValue = scrollPosition;
      this.isShow = false;
    }

  }

  constructor() { }

  ngOnInit(): void {
  }

}
