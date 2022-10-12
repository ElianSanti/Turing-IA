import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { catchError, map, Observable, of } from 'rxjs';
import { ClientStorie } from '../../interfaces/clientHistory.interface';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //! Form
  miFormulario:FormGroup = this.fb.group({
    name:['',Validators.required],
    email:['',[Validators.required,Validators.email]],
    telNumber:[''],
    company: [''],
    msg:['']
  })

  //! Carousel content
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
  //! Google api
  apiLoaded!:Observable<boolean>;
  center: google.maps.LatLngLiteral = { lat: 19.39801133631236, lng: -99.17149791534074 }
  markerPosition: google.maps.LatLngLiteral = { lat: 19.39801133631236, lng: -99.17149791534074 }

  @ViewChild(MapInfoWindow) infoWindow!: MapInfoWindow;

  scrollValue = 200;
  mapWidth    = 600;
  breakpointMap = {
    normal : 768,
    small  : 490
  };
  
  //!Show navbar
  isShow!:boolean;


  /* This is a decorator that allows us to listen to events on the host element. */
  @HostListener('window:scroll')
  checkScroll(){
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    // console.log(scrollPosition)
    this.showNavbar(scrollPosition);
  }
  
  /* This is a decorator that allows us to listen to events on the host element. */
  @HostListener('window:resize',['$event'])
  onResize(event:any){
    // console.log(event.currentTarget.innerWidth)
    const windowWidthSize = event.currentTarget.innerWidth
    this.resizeMap(windowWidthSize);
  }

  /* This is a decorator that allows us to access the contactUs element in the template. */
  @ViewChild('contactUs') contactUs!:HTMLElement;


  /**
   * The function takes an httpClient object as a parameter and returns an observable that emits a
   * boolean value
   * @param {HttpClient} httpClient - HttpClient - The HttpClient service that we imported from
   * @angular/common/http
   */
  constructor(private httpClient:HttpClient, private fb:FormBuilder, private service:ContactService) {
      this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyA_8tzXJn2KpOXsHvHnsfGOGC9sw64bJ4M','callback')
        .pipe(
          map( ()=> true),
          catchError( () => of(false))
        )
   }

  ngOnInit(): void {
  }

  /**
   * If the scroll position is greater than the scroll value, then the scroll value is equal to the
   * scroll position and the navbar is shown. If the scroll position is less than the scroll value,
   * then the scroll value is equal to the scroll position and the navbar is hidden
   * @param {number} scrollPosition - This is the current scroll position of the page.
   */
  showNavbar(scrollPosition:number){
    if (scrollPosition >= this.scrollValue) {
      this.scrollValue = scrollPosition;
      this.isShow = true;
    } else {
      this.scrollValue = scrollPosition;
      this.isShow = false;
    }
  }

  /**
   * If the window width is less than the normal breakpoint, set the map width to 400. If the window
   * width is less than the small breakpoint, set the map width to 300. Otherwise, set the map width to
   * 600
   * @param {number} windowWidthSize - the current width of the window
   */
  resizeMap(windowWidthSize:number){
    if (windowWidthSize < this.breakpointMap.normal) {
      this.mapWidth = 400
      if (windowWidthSize < this.breakpointMap.small) {
        this.mapWidth = 300
      }

    } else {
      this.mapWidth = 600;      
    }
  }

  openInfoWindow(marker: MapMarker) {
    this.infoWindow.open(marker);
  }

  //! Send form
  sendForm(){
    const {nombre,email,telNumber, company, msg} = this.miFormulario.value;
    this.service.sendForm(nombre,email,telNumber, company, msg)
      .subscribe(ok=>{
        console.log(ok)
      })
  }

}
