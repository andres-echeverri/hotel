export interface cardHotel {
    image: "https://images.prismic.io/vivaair-cms/530da708-3d56-4ccf-ac79-a3937ad0e8de_barrio-san-blas.png?auto=compress,format",
    hotel: string,
    descripcion: string,
    ubicacion: string,
    direccion: string,
    recomendado: string,
    userReservation: user[],
    availability: boolean,
    minPrice: number,
    habitaciones: room[]
  }

  export interface room {
    tipo: string,
    descripcion: string,
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
