import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { cardHotel, room } from '../interfaces/general-info';

export type Role = 'admin' | 'user' | null;

@Injectable({
  providedIn: 'root'
})
export class GeneralInfoService {
  formReservationInfo$: Observable<cardHotel[]>;
  formConfirmedReservationRoomInfo$: Observable<cardHotel[]>;
  login$: Observable<Role>;
  private formLoginInfoSource = new BehaviorSubject<Role>(null);
  private formConfirmedReservationRoomInfoSource = new BehaviorSubject<cardHotel[]>([])
  private formReservationInfoSource = new BehaviorSubject<cardHotel[]>([
    {
      image: "https://images.prismic.io/vivaair-cms/530da708-3d56-4ccf-ac79-a3937ad0e8de_barrio-san-blas.png?auto=compress,format",
      hotel: "Baluarte Cartagena Hotel Boutique",
      descripcion: "El Baluarte Cartagena Hotel Boutique ofrece habitaciones y apartamentos de servicio completo con WiFi gratuita y alberga una terraza tropical en la azotea con bañera de hidromasaje. El establecimiento se encuentra en el centro histórico de Bocagrande, a poca distancia del mar Caribe.",
      ubicacion: "Cartagena",
      direccion: "Bocagrande",
      recomendado: false,
      userReservation: [],
      availability: false,
      minPrice: 100900,
      habitaciones: [
        {
          tipo: "suite",
          tax: "",
          descripcion: "El Baluarte Cartagena Hotel Boutique ofrece habitaciones y apartamentos de servicio completo con WiFi gratuita y alberga una terraza tropical en la azotea con bañera de hidromasaje. El establecimiento se encuentra en el centro histórico de Bocagrande, a poca distancia del mar Caribe.",
          precio: 109000,
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
        },
        {
          tipo: "suite",
          tax: "",
          descripcion: "El Baluarte Cartagena Hotel Boutique ofrece habitaciones y apartamentos de servicio completo con WiFi gratuita y alberga una terraza tropical en la azotea con bañera de hidromasaje. El establecimiento se encuentra en el centro histórico de Bocagrande, a poca distancia del mar Caribe.",
          precio: 109000,
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
      hotel: "Hotel Regatta Cartagena",
      descripcion: "El Hotel Regatta se encuentra frente a la playa de Cartagena, cerca del centro histórico, y ofrece habitaciones con decoración alegre, WiFi gratis y vistas panorámicas al océano. Hay piscina en la azotea y se ofrece una gran variedad de masajes relajantes.",
      ubicacion: "Cartagena",
      direccion: "Bocagrande",
      recomendado: true,
      minPrice: 100900,
      availability: true,
      userReservation: [],
      habitaciones: [
        {
          tipo: "suite",
          tax: "",
          descripcion: "El Hotel Regatta se encuentra frente a la playa de Cartagena, cerca del centro histórico, y ofrece habitaciones con decoración alegre, WiFi gratis y vistas panorámicas al océano. Hay piscina en la azotea y se ofrec",
          precio: 319000,
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
      hotel: "Hotel Boutique At the Park",
      descripcion: "El Hotel Boutique está situado en Cartagena de Indias, cerca de la playa de Marbella, la playa de Bocagrande y las murallas de Cartagena. El Park cuenta con conexión WiFi gratuita y salón compartido.",
      ubicacion: "Cartagena",
      direccion: "El rodadero",
      recomendado: true,
      userReservation: [],
      availability: true,
      minPrice: 100900,
      habitaciones: [
        {
          tipo: "suite",
          tax: "",
          descripcion: "El Hotel Boutique está situado en Cartagena de Indias, cerca de la playa de Marbella, la playa de Bocagrande y las murallas de Cartagena. El Park cuenta con conexión WiFi gratuita y salón compartido.",
          precio: 209000,
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
      ubicacion: "Cartagena",
      direccion: "El rodadero",
      recomendado: true,
      minPrice: 100900,
      availability: true,
      userReservation: [],
      habitaciones: [
        {
          tipo: "suite",
          tax: "",
          descripcion: "Este hotel de 5 estrellas se encuentra a orillas del lago Nahuel Huapi y presenta una arquitectura elegante. El Casco Art Hotel exhibe 500 obras de arte exclusivas de escultores",
          precio: 409000,
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
      minPrice: 100900,
      userReservation: [],
      availability: true,
      habitaciones: [
        {
          tipo: "suite",
          tax: "",
          descripcion: "Este hotel de 5 estrellas se encuentra a orillas del lago Nahuel Huapi y presenta una arquitectura elegante. El Casco Art Hotel exhibe 500 obras de arte exclusivas de escultores",
          precio: 89000,
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
      ],
    },
  ]);


  constructor() {
    this.formReservationInfo$ = this.formReservationInfoSource.asObservable();
    this.formConfirmedReservationRoomInfo$ = this.formConfirmedReservationRoomInfoSource.asObservable();
    this.login$ = this.formLoginInfoSource.asObservable();
   }


  setFormReservationInfo(reservations: cardHotel[]): void {
    this.formReservationInfoSource.next(reservations);
  }

  setFormConfirmedReservationRoomInfo(reservationRoom: cardHotel[]): void {
    this.formConfirmedReservationRoomInfoSource.next(reservationRoom);
  }

  setFormLoginInfo(loginAdmin: Role): void {
    this.formLoginInfoSource.next(loginAdmin);
  }
}
