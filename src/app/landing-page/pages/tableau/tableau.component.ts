import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit {

  tableauProducts = [
    {
      title: 'Tableau Prep',
      description: 'Cambia la forma en que se realiza la preparación de datos tradicional en una organización. Al proporcionar una forma visual y directa de combinar, dar forma y limpiar datos. Asimismo, automatiza los flujos de preparación de datos. Así podrá completar los análisis y obtener la información mucho más rápido.',
      url: '/t-prep',
      img: 'https://www.turing-ia.com/assets/img/prep.png'
    },
    {
      title: 'Tableau Desktop',
      description: 'Deje atrás a los creadores de gráficos. Los análisis visuales en vivo impulsan la exploración de datos ilimitada.',
      url: '/t-desktop',
      img: 'https://www.turing-ia.com/assets/img/getinsightsfast.gif'
    },
    {
      title:'Tableau Cloud',
      description: 'Es su plataforma de análisis completamente alojada en la nube. Publique Dashboards y comparta sus descubrimientos con cualquier persona.',
      url: '/t-cloud',
      img: 'https://www.turing-ia.com/assets/img/tabon.png'
    },
    {
      title: 'Tableau Server',
      description: 'Difunde el valor de los datos en toda tu organización con Tableau Server. Otórgale poder a tu empresa dándole la libertad de explorar los datos en un entorno de confianza, sin limitarlos a preguntas predefinidas, asistentes o tipos de gráficos inflexibles. Leer Más',
      url: 't-server',
      img: 'https://www.turing-ia.com/assets/img/servert.png'
    },
    {
      title: 'Tableau Data Management',
      description: 'Te ayuda a administrar mejor los datos dentro de tu entorno de análisis, asegurando que siempre se usen datos confiables y actualizados para tomar decisiones.',
      url: '/t-data-management',
      img: 'https://www.turing-ia.com/assets/img/dataman.jpg'
    },
    {
      title: 'Tableau server',
      description: 'Tableau Server Management Add-on facilita la ejecución de implementaciones de Tableau Server grandes y de misión crítica.',
      url: '/t-server-management',
      img: 'https://www.turing-ia.com/assets/img/serverma.png'
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
