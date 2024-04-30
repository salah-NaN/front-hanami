const fechas = {
  1: 'ene',
  2: 'feb',
  3: 'mar',
  4: 'abr',
  5: 'may',
  6: 'jun',
  7: 'jul',
  8: 'ago',
  9: 'sep',
  10: 'oct',
  11: 'nov',
  12: 'dic'
}
const nombreConvertido = [
  {
    nombre: 'CerezoCapullo',
    convertido: 'Boton Blanco'
  },
  {
    nombre: 'CerezoGrande',
    convertido: 'Cerezo Grande'
  },
  {
    nombre: 'CerezoInicioFlor',
    convertido: ' Inicio Floración'
  },
  {
    nombre: 'CerezoMaxFloracion',
    convertido: 'Flor Abierta'
  },
  {
    nombre: 'CerezoMediano',
    convertido: 'Cerezo Mediano '
  },
  {
    nombre: 'CerezoMuerto',
    convertido: 'Caida de la flor'
  },
  {
    nombre: 'CerezoPequenio',
    convertido: 'Cerezo Pequeño'
  },
  {
    nombre: 'LavandaCapullo',
    convertido: 'Lavanda sin brotes'
  },
  {
    nombre: 'LavandaInicioFlor',
    convertido: 'Brotes de Lavanda'
  },
  {
    nombre: 'LavandaMaxFloracion',
    convertido: 'Lavanda en Flor'
  },
  {
    nombre: 'LavandaMuerta',
    convertido: 'Lavanda para Cosechar'
  },
  {
    nombre: 'OlivoFlor',
    convertido: 'Olivo Floracion'
  },
  {
    nombre: 'OlivoGrande',
    convertido: 'Olivo Cuajado'
  },
  {
    nombre: 'OlivoMediano',
    convertido: 'Olivo Carolas visibles'
  },
  {
    nombre: 'OlivoPequenio',
    convertido: 'Olivo Inicio'
  },
  {
    nombre: 'ViñaFlor',
    convertido: 'Vid en Flor'
  },
  {
    nombre: 'ViñaUvaGrande',
    convertido: 'Vid Madura'
  },
  {
    nombre: 'ViñaUvaMediana',
    convertido: 'Vid Inicio (Veraison)'
  },
  {
    nombre: 'ViñaUvaPequeña',
    convertido: 'Vid Cuajado'
  }
]


// funciones
const parseNumTelefono = (tel) => {
  return tel?.slice(0, 3) + ' ' + tel?.slice(3, 6) + ' ' + tel?.slice(6, 10)
}

const parseFecha = (date) => {
  return date?.split('/').map((d, index) => index === 1 ? fechas[d] : d).join(' ')
}


const parseTemporada = (string) => {
  return nombreConvertido.find(o => o.nombre === string)?.convertido
}

// const poblaciones = [
//   {
//     nombre: 'Gratallops',
//     latitud: 41.646,
//     longitud: 2.078
//   },
//   {
//     nombre: 'Aitona',
//     latitud: 41.646,
//     longitud: 2.078
//   },
//   {
//     nombre: 'Manresa',
//     latitud: 41.646,
//     longitud: 2.078
//   },
//   {
//     nombre: 'Barcelona',
//     latitud: 41.646,
//     longitud: 2.078
//   },
//   {
//     nombre: 'Lleida',
//     latitud: 41.646,
//     longitud: 2.078
//   },
//   {
//     nombre: 'Girona',
//     latitud: 41.646,
//     longitud: 2.078
//   },
//   {
//     nombre: "La Seu d''Urgell",
//     latitud: 41.646,
//     longitud: 2.078
//   },
//   {
//     nombre: 'Tarragona',
//     latitud: 41.646,
//     longitud: 2.078
//   },
//   {
//     nombre: 'Reus',
//     latitud: 41.646,
//     longitud: 2.078
//   },
//   {
//     nombre: 'Igualada',
//     latitud: 41.646,
//     longitud: 2.078
//   },
//   {
//     nombre: 'Gratallops',
//     latitud: 41.646,
//     longitud: 2.078
//   },
// ]

const poblaciones = [
  {
    nombre: 'Gratallops',
    latitud: 41.2794,
    longitud: 0.7551
  },
  {
    nombre: 'Aitona',
    latitud: 41.3184,
    longitud: 0.4921
  },
  {
    nombre: 'Manresa',
    latitud: 41.726,
    longitud: 1.824
  },
  {
    nombre: 'Barcelona',
    latitud: 41.3851,
    longitud: 2.1734
  },
  {
    nombre: 'Lleida',
    latitud: 41.6176,
    longitud: 0.6200
  },
  {
    nombre: 'Girona',
    latitud: 41.9793,
    longitud: 2.8195
  },
  {
    nombre: "La Seu d''Urgell",
    latitud: 42.3595,
    longitud: 1.4612
  },
  {
    nombre: 'Tarragona',
    latitud: 41.1189,
    longitud: 1.2445
  },
  {
    nombre: 'Reus',
    latitud: 41.1561,
    longitud: 1.1069
  },
  {
    nombre: 'Igualada',
    latitud: 41.5809,
    longitud: 1.6169
  }
];



export { fechas, nombreConvertido, parseNumTelefono, parseFecha, parseTemporada, poblaciones }