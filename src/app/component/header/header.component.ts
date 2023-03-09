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
    console.log("corre");
    
    this.generalInfo.loginAdmin$.subscribe(logAdmin => {
      if(logAdmin){
        this.generalInfo.setFormLoginAdminInfo(false)
        this.flagloggedUsser = true;
      }else{
        this.generalInfo.loginUser$.subscribe(logUsser => {
          if(logUsser){
            this.generalInfo.setFormLoginUsserInfo(false)
            this.flagloggedUsser = true;
          }else{
            console.log("adwda");
            
            this.loginUsser.emit(true)
            this.flagloggedUsser = false;
          }
        }).unsubscribe();
      }
    }).unsubscribe();
    
  }

}
