export interface cardHotel {
    image: string,
    hotel: string,
    descripcion: string,
    ubicacion: string,
    direccion: string,
    recomendado: boolean,
    userReservation: user[],
    availability: boolean,
    minPrice: number,
    habitaciones: room[]
  }

  export interface room {
    tipo: string,
    descripcion: string,
    tax: string,
    precio: number,
    servicios: string[],
    caracteristicas: string[]
  }

  export interface user {
    Email: string,
    date: string
    document: string,
    gender: string,
    phone: string,
    typeDocument: string,
    user: string
  }
