import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { cardHotel, room } from 'src/app/core/interfaces/general-info';
import { GeneralInfoService, Role } from '../../core/services/general-info.service';
import { user } from '../../core/interfaces/general-info';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  public formGroup!: FormGroup;
  public formGroupRooms!: FormGroup;
  public formEditHotel!: FormGroup;
  savelistHotel!: cardHotel[];
  hotels!: cardHotel[];
  // Lista de hoteles recomendados
  recomendedHotel!: cardHotel[];
  page!: number;
  searchedDestination!: string;

  search: boolean = false;
  textError: boolean = false;
  removeFilter: boolean = false;
  buttonReservation: boolean = false;
  showFormLogin: boolean = false
  showFormUser: boolean = false
  showFormNewHotel: boolean = false
  showFormEditHotel: boolean = false
  showPageAdminReservation: boolean = false;

  listRoomAvailable!: room[];
  confirmedHotel: cardHotel[] = [];
  newRooms: room[] = [];
  dataUserForm: any = [];
  // hotel seleccionado
  itemSelected!: cardHotel;

  generalInfoSubscription!: Subscription;
  loginSubscription!: Subscription;


  constructor(public readonly generalInfo: GeneralInfoService,
              private readonly formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.generalInfo.formReservationInfo$.subscribe(listHotel => {
      this.savelistHotel = listHotel;
      this.hotels = listHotel;
      this.recomendedHotel = listHotel.filter((hotel: any) => hotel.recomendado === true)
    });

    this.buildForm();
    this.buildFormRooms();
    this.buildFormEditHotel()
  }

  ngOnDestroy(): void {
    this.generalInfoSubscription?.unsubscribe();
    this.loginSubscription?.unsubscribe();
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

  private buildFormEditHotel() {
    this.formEditHotel = this.formBuilder.group({
      hotel: [this.itemSelected?.hotel, Validators.required],
      description: ['', Validators.required],
      location: ['', Validators.required],
      addres: ['', Validators.required],
      recomended: ['', Validators.required],
      minPrice: ['', Validators.required],
      available: ['', Validators.required],
    });
  }

  SearchDestination(destination: {destination: string, person: string, registeredOff: string, registeredOn: string}) {
    this.searchedDestination = destination.destination;
    this.search = true;
    this.removeFilter = true;
    this.searchedDestination = destination.destination;
    this.hotels = this.savelistHotel.filter((resp: any) => resp.ubicacion.toUpperCase() === destination.destination.toUpperCase());
    this.textError = this.hotels.length === 0;
  } 

  removeFilterOnClick(){
    this.hotels = this.savelistHotel;
    this.textError = false;
    this.removeFilter = false;
    this.search = false;
  }

  reservationonClick(item: any){
    this.generalInfo.login$.subscribe((login: Role) => {
      this.itemSelected = item;
      console.log(this.itemSelected);
      if(login == 'user'){
        this.listRoomAvailable = item.habitaciones;
        this.buttonReservation = !this.buttonReservation
      }else if(login == 'admin'){
        this.editHotels()
      }else{
        this.showFormLogin = !this.showFormLogin 
      }
    });
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
    const newHotel: cardHotel = {
      image: "https://images.prismic.io/vivaair-cms/530da708-3d56-4ccf-ac79-a3937ad0e8de_barrio-san-blas.png?auto=compress,format",
      hotel: data?.hotel,
      descripcion: data?.description,
      ubicacion: data?.location,
      direccion: data?.addres,
      recomendado: data?.recomended,
      userReservation: [],
      availability: true,
      minPrice: parseInt(data?.minPrice),
      habitaciones: this.newRooms
    }
    this.hotels.unshift(newHotel)
    this.showFormNewHotel = false;
    this.generalInfo.setFormReservationInfo(this.hotels)
    
  }

  editHotels(){
    console.log(this.itemSelected);
    
    this.showFormEditHotel = !this.showFormEditHotel;
    if(this.showFormEditHotel === true){
      this.formEditHotel.patchValue({
        ['hotel']: this.itemSelected?.hotel,
      });
      this.formEditHotel.patchValue({
        ['description']: this.itemSelected?.descripcion,
      });
      this.formEditHotel.patchValue({
        ['addres']: this.itemSelected?.direccion,
      });
      this.formEditHotel.patchValue({
        ['minPrice']: this.itemSelected?.minPrice,
      });
      this.formEditHotel.patchValue({
        ['recomended']: this.itemSelected?.recomendado,
      });
      this.formEditHotel.patchValue({
        ['location']: this.itemSelected?.ubicacion,
      });
      this.formEditHotel.patchValue({
        ['available']: this.itemSelected?.availability,
      });
    }else{
      const indice: number = this.hotels.indexOf(this.itemSelected);
      const data = this.formEditHotel.value;
      const editHotel: cardHotel = {
        image: "https://images.prismic.io/vivaair-cms/530da708-3d56-4ccf-ac79-a3937ad0e8de_barrio-san-blas.png?auto=compress,format",
        hotel: data?.hotel,
        descripcion: data?.description,
        ubicacion: data?.location,
        direccion: data?.addres,
        recomendado: data?.recomended,
        availability: data?.available,
        minPrice: parseInt(data?.minPrice),
        habitaciones: this.itemSelected?.habitaciones,
        userReservation: this.itemSelected?.userReservation,
      }
      this.hotels[indice] = editHotel;
      this.generalInfo.setFormReservationInfo(this.hotels)
    }

    
  }

  newRoomsForHotelonClick(){
    const room = this.formGroupRooms.value;
    const newRooms = {
      tipo: room?.type,
      descripcion: room?.description,
      precio: parseInt(room?.price),
      tax: '19',
      servicios: room?.services.split(','),
      caracteristicas: room?.characteristics.split(',')
    }
    this.newRooms.push(newRooms)
    this.formGroupRooms.reset()
  }

  dataUser(data: user){
    this.dataUserForm.push(data)
    console.log(this.dataUserForm);
    
    
  }

  confirmReservation(){
    if(this.showFormUser === false){
      this.showFormUser = true
    }else{
      this.itemSelected.userReservation = this.itemSelected.userReservation.concat(this.dataUserForm)
      this.confirmedHotel.push(this.itemSelected);
      this.dataUserForm = [];
      this.generalInfo.setFormConfirmedReservationRoomInfo(this.confirmedHotel)
      this.showFormUser = !this.showFormUser;
      this.buttonReservation = !this.buttonReservation
    }
    
  }

}
