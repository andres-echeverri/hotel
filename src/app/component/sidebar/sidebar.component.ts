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
  flagShowReservation: boolean = false
  @Output() searchHotel = new EventEmitter();
  @Output() showNewHotel = new EventEmitter();
  @Output() showReservation = new EventEmitter();

  constructor( private formBuilder: FormBuilder,
                public generalInfo:GeneralInfoService ) { }

  public ngOnInit() {
    this.buildForm();
  }
  
  private buildForm() {
    const dateLength = 10;
    this.date = new Date().toISOString().substring(0, dateLength);
    this.formGroup = this.formBuilder.group({
      registeredOn: [this.date, Validators.required],
      registeredOff: [this.date, Validators.required],
      destination: ['', Validators.required],
      person: ['1', Validators.required],
    });
  }

  public showReservationActive(){
    if(this.flagShowReservation === false){
      this.showReservation.emit("showReservation")
      this.flagShowReservation = true;
    }else{
      this.showReservation.emit("showListHotel")
      this.flagShowReservation = false
    }
  }

  public newHotelOnClick(){
    this.showNewHotel.emit()
  }

  public search() {
    const search = this.formGroup.value;
    this.searchHotel.emit(search)
  }

}
