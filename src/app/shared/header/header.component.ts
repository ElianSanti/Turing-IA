import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  titleDynamic = [
    {
      path: 'home',
      title: 'Bienvenido',
      text: 'Hacemos los datos fáciles de usar',
      videoUrl: 'https://drive.google.com/uc?export=download&id=1J_Y4xY_FGItfFan4xu0GBo1w73WYqxFT'
    },
    {
      path:'about',
      title: 'Nosotros',
      text: 'Somos Especialistas en Proyectos de Business Analytics',
      videoUrl: 'https://drive.google.com/uc?export=download&id=1hKeJwcb4AVnx1Ey0zHuAZJGNYkC_cgIK'
    },
    {
      path: 'services',
      title: 'Servicios',
      text: 'Tenemos una gran gama de soluciones para llevar al máximo el nivel tu compañia',
      videoUrl: 'https://drive.google.com/uc?export=download&id=1jW2wkRggl5WzQH4Y7DOcL22DA9bcb6H9'
    },
    {
      path: 'tableau',
      title: 'Tableau',
      text: 'Ayuda a las personas a ver y comprender los datos',
      videoUrl: 'https://drive.google.com/uc?export=download&id=1JiDmLaiIBJI43AGCh9j5UQ_pmwGGJ7We'
    },
    {
      path: 'blog',
      title: 'Blog',
      text: 'Los grandes conocimientos engendran las grandes dudas.',
      videoUrl: 'https://drive.google.com/uc?export=download&id=1KJrqmU_F8f04alGCXZtPfAPpUeng0cqs'
    },
    {
      path: 't-desktop',
      title: 'Tableau Desktop',
      text: 'Responda preguntas a la velocidad del pensamiento',
      videoUrl: 'https://drive.google.com/uc?export=download&id=1Ahso76ncnQkaGqOlGIBRDVZ5g3zz6u4l'
    },
    {
      path: 't-prep',
      title: 'Tableau Prep',
      text: 'Limpie, combine y dé forma a los datos para el análisis',
      videoUrl: 'https://drive.google.com/uc?export=download&id=132jgcZnseaKkxGIo-tm8xAg1Oi7DgTkP'
    },
    {
      path: 't-cloud',
      title: 'Tableau Cloud',
      text: 'Tome decisiones más inteligentes con un análisis sencillo, rápido y flexible',
      videoUrl: 'https://drive.google.com/uc?export=download&id=1Ahso76ncnQkaGqOlGIBRDVZ5g3zz6u4l'
    },
    {
      path: 't-server',
      title: 'Tableau Server',
      text: 'Análisis de autoservicio gobernado escalable',
      videoUrl: 'https://drive.google.com/uc?export=download&id=1q-AvMp6SepzVLLVu08q8WR2lTf9blcCd'
    },
    {
      path:'t-server-management',
      title: 'Tableau Server Management',
      text: 'Administre Tableau Server de forma escalable',
      videoUrl:'https://drive.google.com/uc?export=download&id=1s0YmKypLX20N2qms_u2Cx3A4KQ7kRvbt'
    },
    {
      path:'t-data-management',
      title: 'Tableau Data Management',
      text: 'Descubra, comprenda, conecte y aumente su confianza en sus datos para el análisi',
      videoUrl: 'https://drive.google.com/uc?export=download&id=132jgcZnseaKkxGIo-tm8xAg1Oi7DgTkP'
    }

  ]
  currentRouting!:string;
  currentData = {
    path:'',
    title: '',
    text: '',
    videoUrl: ''
  };

  constructor(private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.url.subscribe( r => this.currentRouting = r[0].path)
    this.searchRute()
  }

  searchRute(){
    const result = this.titleDynamic.filter(m => m.path === this.currentRouting)
    this.currentData = result[0];
    console.log(this.currentData)
  }

}
