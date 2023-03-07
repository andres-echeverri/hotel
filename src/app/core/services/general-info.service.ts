import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralInfoService {
  formValidationErrorsInfo$: Observable<any>;
  private formValidationErrorsInfoSource = new BehaviorSubject<any>([
    {
      image: "https://images.prismic.io/vivaair-cms/530da708-3d56-4ccf-ac79-a3937ad0e8de_barrio-san-blas.png?auto=compress,format",
      hotel: "El casco art HOTEL",
      descripcion: "Este hotel de 5 estrellas se encuentra a orillas del lago Nahuel Huapi y presenta una arquitectura elegante. El Casco Art Hotel exhibe 500 obras de arte exclusivas de escultores",
      ubicacion: "Cartagena",
      direccion: "El rodadero",
      recomendado: true,
      habitaciones: [
        {
          tipo: "suite",
          valor: "",
          descripcion: "",
          servicios: [
            'Actividades infantiles (Ideal para niños / familias)',
            'Desayuno gratis',
            'Cancha de tenis',
            'Transporte gratis al aeropuerto',
            'Gimnasio / Sala de entrenamiento',
            'Restaurante',
            'Vestuarios de gimnasio/spa',
            'Estacionamiento gratis'
          ],
          caracteristicas: [
            'TV pantalla plana',
            'Caja fuerte',
            'Aire acondicionado',
            'Minibar',
          ]
        }
      ]
    },
    {
      image: "https://images.prismic.io/vivaair-cms/530da708-3d56-4ccf-ac79-a3937ad0e8de_barrio-san-blas.png?auto=compress,format",
      hotel: "El casco art HOTEL",
      descripcion: "Este hotel de 5 estrellas se encuentra a orillas del lago Nahuel Huapi y presenta una arquitectura elegante. El Casco Art Hotel exhibe 500 obras de arte exclusivas de escultores",
      ubicacion: "pasto",
      direccion: "El rodadero",
      recomendado: false,
      habitaciones: [
        {
          tipo: "suite",
          valor: "",
          descripcion: "",
          servicios: [
            'Actividades infantiles (Ideal para niños / familias)',
            'Desayuno gratis',
            'Cancha de tenis',
            'Transporte gratis al aeropuerto',
            'Gimnasio / Sala de entrenamiento',
            'Restaurante',
            'Vestuarios de gimnasio/spa',
            'Estacionamiento gratis'
          ],
          caracteristicas: [
            'TV pantalla plana',
            'Caja fuerte',
            'Aire acondicionado',
            'Minibar',
          ]
        }
      ]
    },
  ]);

  constructor() {
    this.formValidationErrorsInfo$ = this.formValidationErrorsInfoSource.asObservable();
   }


   setFormValidationErrorsInfo(validationErrors: any): void {
    this.formValidationErrorsInfoSource.next(validationErrors);
  }
}
