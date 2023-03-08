import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralInfoService } from '../../core/services/general-info.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public formGroup!: FormGroup;
  date!: string;
  reservationRooms!: any;
  @Output() searchHotel = new EventEmitter();

  constructor( private formBuilder: FormBuilder,
                public generalInfo:GeneralInfoService ) { }

  public ngOnInit() {
    this.buildForm();
    this.generalInfo.loginAdmin$
  }
  
  private buildForm() {
    const dateLength = 10;
    this.date = new Date().toISOString().substring(0, dateLength);
    const name = 'JOHN DOE';
    this.formGroup = this.formBuilder.group({
      registeredOn: [this.date, Validators.required],
      registeredOff: [this.date, Validators.required],
      destination: ['', Validators.required],
      person: ['1', Validators.required],
    });
  }

  showReservation(){
    this.generalInfo.formConfirmedReservationRoomInfo$.subscribe((listItems: any) => {

      this.reservationRooms = listItems;
      this.reservationRooms.length === 0? console.log("no hay nada") : console.log("hay ", this.reservationRooms);
      
      
    }).unsubscribe();
  }

  public search() {
    const user = this.formGroup.value;
    console.log(user);
    this.searchHotel.emit(user)
  }

}
