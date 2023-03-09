import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GeneralInfoService } from '../../core/services/general-info.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public formGroup!: FormGroup;
  listHotel: any;
  hotel: any;
  recomendedHotel: any
  page!: number;
  search: boolean = false;
  searchedDestination!: string;
  textError: boolean = false;
  removeFilter: boolean = false;
  roomReservation: any;
  buttonReservation: boolean = false;
  confirmedRoom: any = [];
  showFormLogin: boolean = false
  showFormNewHotel: boolean = false
  showFormEditHotel: boolean = false


  constructor(public readonly generalInfo: GeneralInfoService) { }

  ngOnInit(): void {
    this.generalInfo.formReservationRoomInfo$.subscribe(listHotel => {
      this.listHotel = listHotel;
      this.hotel = listHotel
      this.recomendedHotel = listHotel.filter((hotel: any) => hotel.recomendado === true)
    })
  }

  SearchDestination(destination: any) {
    this.searchedDestination = destination.destination;
    this.search = true;
    this.removeFilter = true;
    this.searchedDestination = destination.destination;
    this.hotel = this.listHotel.filter((resp: any) => resp.ubicacion.toUpperCase() === destination.destination.toUpperCase());
    this.textError = this.hotel.length === 0;
  } 

  removeFilterOnClick(){
    this.hotel = this.listHotel;
    this.textError = false;
    this.removeFilter = false;
    this.search = false;
  }

  reservationonClick(item: any){
    this.roomReservation = item.habitaciones;
    console.log("this.hotelReservation", this.roomReservation);
    
    this.buttonReservation = !this.buttonReservation
  }

  confirmReservation(item: any){
    this.confirmedRoom.push(item)
    this.generalInfo.setFormConfirmedReservationRoomInfo(this.confirmedRoom)
    console.log("this.confirmedRoom",this.confirmedRoom);
    this.buttonReservation = !this.buttonReservation
  }

  login(checkLogin: boolean){
    this.showFormLogin = checkLogin
  }

  closeModalLogin(){
    this.showFormLogin = !this.showFormLogin
  }

  showNewHotel(){
    console.log("adawdwd");
    
    this.showFormNewHotel = true;
  }
  showEditHotel(){
    
  }

  newHotel(){
    console.log(this.listHotel);
    const newHotel = {
      image: "https://images.prismic.io/vivaair-cms/530da708-3d56-4ccf-ac79-a3937ad0e8de_barrio-san-blas.png?auto=compress,format",
      hotel: "Este es un hotel de prueba",
      descripcion: "El Baluarte Cartagena Hotel Boutique ofrece habitaciones y apartamentos de servicio completo con WiFi gratuita y alberga una terraza tropical en la azotea con bañera de hidromasaje. El establecimiento se encuentra en el centro histórico de Bocagrande, a poca distancia del mar Caribe.",
      ubicacion: "San andres",
      direccion: "Jonny kay",
      recomendado: true,
      minPrice: 89900,
      habitaciones: [
        {
          tipo: "calsic",
          valor: "",
          descripcion: "El Baluarte Cartagena Hotel Boutique ofrece habitaciones y apartamentos de servicio completo con WiFi gratuita y alberga una terraza tropical en la azotea con bañera de hidromasaje. El establecimiento se encuentra en el centro histórico de Bocagrande, a poca distancia del mar Caribe.",
          precio: 109000,
          servicios: [
            'Actividades infantiles (Ideal para niños / familias)',
            'Desayuno gratis',
            'Cancha de tenis',
            'Transporte gratis al aeropuerto',
            'Gimnasio / Sala de entrenamiento',
            'Restaurante',
            'Vestuarios de gimnasio/spa',
            'Estacionamiento gratis'
          ],
          caracteristicas: [
            'TV pantalla plana',
            'Caja fuerte',
            'Aire acondicionado',
            'Minibar',
          ]
        },
        {
          tipo: "Sensilla",
          descripcion: "El Baluarte Cartagena Hotel Boutique ofrece habitaciones y apartamentos de servicio completo con WiFi gratuita y alberga una terraza tropical en la azotea con bañera de hidromasaje. El establecimiento se encuentra en el centro histórico de Bocagrande, a poca distancia del mar Caribe.",
          precio: 109000,
          servicios: [
            'Actividades infantiles (Ideal para niños / familias)',
            'Desayuno gratis',
            'Cancha de tenis',
            'Transporte gratis al aeropuerto',
            'Gimnasio / Sala de entrenamiento',
            'Restaurante',
            'Vestuarios de gimnasio/spa',
            'Estacionamiento gratis'
          ],
          caracteristicas: [
            'TV pantalla plana',
            'Caja fuerte',
            'Aire acondicionado',
            'Minibar',
          ]
        }
      ]
    }
    this.listHotel.unshift(newHotel)
    console.log(this.listHotel);
    
  }

  editHotel(){
    console.log("Editar hoteles");
    
  }

}
