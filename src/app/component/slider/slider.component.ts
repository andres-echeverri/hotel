import { Component, Input, NgZone, OnInit, ViewEncapsulation } from '@angular/core';
import 'swiper/css';
import SwiperCore , {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller,
} from 'swiper';
import { BehaviorSubject } from 'rxjs';
import { GeneralInfoService } from '../../core/services/general-info.service';

SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller
]);
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SliderComponent implements OnInit {

  @Input() hotels: any;
  
  constructor(public readonly generalInfo: GeneralInfoService) { }
  
  ngOnInit(): void {
    
  }
  


}
