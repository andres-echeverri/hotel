import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StringTransformService } from '../../core/services/string-transform.service';

@Component({
  selector: 'app-usser',
  templateUrl: './usser.component.html',
  styleUrls: ['./usser.component.scss']
})
export class UsserComponent implements OnInit {

  public formGroup!: FormGroup;
  @Output() usserData = new EventEmitter();
  date!: string;

  constructor(private readonly formBuilder: FormBuilder,
              private readonly stringTransformService: StringTransformService) { }

  ngOnInit(): void {
    const dateLength = 10;
    this.date = new Date().toISOString().substring(0, dateLength);
    this.buildForm()
  }

  private buildForm() {
    this.formGroup = this.formBuilder.group({
      user: ['', Validators.required],
      date: ['', Validators.required],
      gender: ['', Validators.required],
      typeDocument: ['', Validators.required],
      document: ['', Validators.required],
      Email: ['', Validators.required],
      phone: ['', Validators.required],
    });
  }

  saveUser(){
    const data = this.formGroup.value;
    this.usserData.emit(data)
    this.formGroup.reset()
  }

  avoidSpecialCharacters(e: KeyboardEvent, formControlName: string): void {
    const { value } = e.target as HTMLInputElement;
    let newVal;
    newVal = this.stringTransformService.removeSpecialCharacters(value);
    newVal = this.stringTransformService.removeAdditionalSpaces(newVal);
    newVal = this.stringTransformService.removeAccents(newVal);
    newVal = this.stringTransformService.capitalizeFirst(newVal);

    this.formGroup.patchValue({
      [formControlName]: newVal,
    });
  }


  removeLettersInString(e: KeyboardEvent, formControlName: string): void {
    const { value } = e.target as HTMLInputElement;
    const newVal = value.replace(/[^0-9]/g, '').replace(/\s\s+/g, '');

    this.formGroup.patchValue({
      [formControlName]: newVal,
    });
  }

}
