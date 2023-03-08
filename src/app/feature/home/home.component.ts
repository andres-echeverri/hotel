import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GeneralInfoService } from '../../core/services/general-info.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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


  constructor(private readonly generalInfo: GeneralInfoService) { }

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

}
