import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralInfoService, Role } from '../../core/services/general-info.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public formGroup!: FormGroup;
  public formGroupRooms!: FormGroup;
  listHotel: any;
  hotels: any;
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
  showFormUser: boolean = false
  showFormNewHotel: boolean = false
  showFormEditHotel: boolean = false
  Rooms: any = [];
  dataUserForm: any = [];
  itemSelected: any;
  showPageAdminReservation = false


  constructor(public readonly generalInfo: GeneralInfoService,
              private readonly formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.generalInfo.formReservationInfo$.subscribe(listHotel => {
      this.listHotel = listHotel;
      this.hotels = listHotel
      this.recomendedHotel = listHotel.filter((hotel: any) => hotel.recomendado === true)
    }).unsubscribe()

    this.buildForm();
    this.buildFormRooms();
  }

  private buildForm() {
    this.formGroup = this.formBuilder.group({
      hotel: ['', Validators.required],
      description: ['', Validators.required],
      location: ['', Validators.required],
      addres: ['', Validators.required],
      recomended: ['', Validators.required],
      minPrice: ['', Validators.required],
    });
  }

  private buildFormRooms() {
    this.formGroupRooms = this.formBuilder.group({
      type: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      services: ['', Validators.required],
      characteristics: ['', Validators.required],
    });
  }

  SearchDestination(destination: any) {
    this.searchedDestination = destination.destination;
    this.search = true;
    this.removeFilter = true;
    this.searchedDestination = destination.destination;
    this.hotels = this.listHotel.filter((resp: any) => resp.ubicacion.toUpperCase() === destination.destination.toUpperCase());
    this.textError = this.hotels.length === 0;
  } 

  removeFilterOnClick(){
    this.hotels = this.listHotel;
    this.textError = false;
    this.removeFilter = false;
    this.search = false;
  }

  reservationonClick(item: any){
    this.generalInfo.login$.subscribe((login: Role) => {
      if(login == 'user'){
        this.itemSelected = item;
        this.roomReservation = item.habitaciones;
        this.buttonReservation = !this.buttonReservation
      }else if(login == 'admin'){
        console.log("edit hotel");
      }else{
        this.showFormLogin = !this.showFormLogin 
      }
    })
  }

  showPageActive(event: string){
    this.showPageAdminReservation = !this.showPageAdminReservation;
    
  }

  login(checkLogin: boolean){
    this.showFormLogin = checkLogin;
    this.showPageAdminReservation = false;
  }

  closeModalLogin(){
    this.showFormLogin = !this.showFormLogin
  }

  showNewHotel(){
    this.showFormNewHotel = !this.showFormNewHotel;
  }

  newHotel(){
    const data = this.formGroup.value;
    const newHotel = {
      image: "https://images.prismic.io/vivaair-cms/530da708-3d56-4ccf-ac79-a3937ad0e8de_barrio-san-blas.png?auto=compress,format",
      hotel: data?.hotel,
      descripcion: data?.description,
      ubicacion: data?.location,
      direccion: data?.addres,
      recomendado: data?.recomended,
      userReservation: [],
      minPrice: parseInt(data?.minPrice),
      habitaciones: this.Rooms
    }
    this.listHotel.unshift(newHotel)
    this.showFormNewHotel = false;
    this.generalInfo.setFormReservationInfo(this.listHotel)
    
  }

  editHotel(){
    console.log("Editar hoteles");
    
  }

  newRoomsForHotelonClick(){
    const room = this.formGroupRooms.value;
    const newRooms = {
      tipo: room?.type,
      descripcion: room?.description,
      precio: parseInt(room?.price),
      servicios: room?.services.split(','),
      caracteristicas: room?.characteristics.split(',')
    }
    this.Rooms.push(newRooms)
    this.formGroupRooms.reset()
  }

  dataUser(data: any){
    this.dataUserForm.push(data)
    
  }

  confirmReservation(){
    if(this.showFormUser === false){
      this.showFormUser = true
    }else{
      this.itemSelected.userReservation = this.itemSelected.userReservation.concat(this.dataUserForm)
      this.confirmedRoom.push(this.itemSelected);
      this.dataUserForm = [];
      this.generalInfo.setFormConfirmedReservationRoomInfo(this.confirmedRoom)
      this.showFormUser = !this.showFormUser;
      this.buttonReservation = !this.buttonReservation
    }
    
  }

}
