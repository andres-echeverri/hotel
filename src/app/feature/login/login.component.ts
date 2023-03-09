import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralInfoService } from '../../core/services/general-info.service';

const credentialsAdmin = [
  {usser: 'admin', password: 'admin1234'}
]

const credentialsUsers = [
  {usser: 'user', password: 'user1234'}
]
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formGroup!: FormGroup;
  textLoginError: boolean = false;
  @Output() closeModal = new EventEmitter();

  constructor( private formBuilder: FormBuilder,
                private readonly generalInfo: GeneralInfoService ) { }

  public ngOnInit() {
    this.buildForm();
  }
  
  private buildForm() {
    const minPassLength = 4;
    this.formGroup = this.formBuilder.group({
      usser: ['', Validators.required],
      password: ['', [
        Validators.required, Validators.minLength(minPassLength)
      ]]
    });
  }

  public loginUsser() {
    const user = this.formGroup.value;
    if(!!credentialsAdmin.find((credential: {usser: string, password: string}) => credential.usser === user.usser && credential.password === user.password)){
      this.generalInfo.setFormLoginInfo("admin")
      this.closeModal.emit();
    }else if(!!credentialsUsers.find((credential: {usser: string, password: string}) => credential.usser === user.usser && credential.password === user.password)){
      this.generalInfo.setFormLoginInfo("user")
      this.closeModal.emit();
    }else{
      this.textLoginError = true;
    }
  }

  ModalLogin(){
    this.closeModal.emit();
  }

}
