import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GeneralInfoService } from '../../core/services/general-info.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() loginUsser = new EventEmitter();
  flagloggedUsser: boolean = false;

  constructor(public generalInfo: GeneralInfoService) { }

  ngOnInit(): void {
  }

  loginOnClick(){
    this.generalInfo.login$.subscribe(loguin => {
      if(loguin === 'admin' || loguin === 'user'){
        this.generalInfo.setFormLoginInfo(null)
      }else{
        if(this.flagloggedUsser = true){
          this.loginUsser.emit(true)
        }
      }
    }).unsubscribe();
    
  }

}
