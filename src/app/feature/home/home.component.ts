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

  constructor(private readonly generalInfo: GeneralInfoService) { }

  ngOnInit(): void {
    console.log(this.recomendedHotel);
    
    this.generalInfo.formValidationErrorsInfo$.subscribe(listHotel => {
      console.log(listHotel);
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

}
