import React, { useEffect, useState, useRef } from 'react';
import L, { Marker, icon, map } from 'leaflet'
import 'leaflet/dist/leaflet.css';

// las imágenes de los cerezos
// import cerezas from '../../../public/images/cerezas'

const dataPDI = [{
  id: 1,
  nombre: 'bodega manolo',
  descripcion: 'loremipsum',
  latitud: 41.6092,
  longitud: 2.1477,
  ubicacion: 'C/Angel, 10',
  poblacion: 'Terrasa',
  comarca: 'Bages',
  propietario_id: 2,
  tipo: 'Viña'
},
{
  id: 2,
  nombre: 'campo aguilar',
  descripcion: 'loremipsum',
  latitud: 41.7092,
  longitud: 2.1470,
  ubicacion: 'C/Francisco, 31',
  poblacion: 'St Fruitos Bages',
  comarca: 'Bages',
  propietario_id: 2,
  tipo: 'Cerezo'
},
{
  id: 3,
  nombre: 'bodega manolo',
  descripcion: 'loremipsum',
  latitud: 41.4092,
  longitud: 2.0477,
  ubicacion: 'C/Angel, 10',
  poblacion: 'Terrasa',
  comarca: 'Bages',
  propietario_id: 2,
  tipo: 'Viña'
},
{
  id: 4,
  nombre: 'campo aguilar',
  descripcion: 'loremipsum',
  latitud: 41.3092,
  longitud: 2.0470,
  ubicacion: 'C/Francisco, 31',
  poblacion: 'St Fruitos Bages',
  comarca: 'Bages',
  propietario_id: 2,
  tipo: 'Cerezo'
}
]


export default function Mapa() {
  const mapRef = useRef(null);
  const [puntosInteres, setPuntosInteres] = useState(dataPDI)

  useEffect(() => {

    // fetch para sacar todos los puntos de interes y todas sus temporadas
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    }
    // fetch(URL + '/todos_puntos_interes', options)
    //   .then(res => res.json())
    //   .then(res => {
    //     console.log(res)
    //   })
    //   .catch(err => console.log(err))




    // creación del mapa y todos los markers según el fetch de la api
    const ourMap = L.map(mapRef.current).setView([41.6092, 2.1477], 9);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(ourMap);


    // mapeo de todos los markers y asignacion de diseño de marker en switch case
    {
      puntosInteres.map(punto => {

        // switch case para cada tipo de flor, su estado de floracion o 'frutacion'
        // dependienda de punto.tipo y punto.temporadas.nombre
        // switch (punto) {
        //   case value:
            
        //     break;
        
        //   default:
        //     break;
        // }

        return L.marker([punto.latitud, punto.longitud], { icon: cerezoCapullo }).addTo(ourMap)
      })
    }
  }, []);

  // estados de la viña
  const viñaFlor = L.icon({
    iconUrl: '/images/cerezas.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32]
  })
  const viñaUvaPequenia = L.icon({
    iconUrl: '',
    iconSize: [32, 32],
    iconAnchor: [16, 32]
  })
  const viñaUvaMediana = L.icon({
    iconUrl: '',
    iconSize: [32, 32],
    iconAnchor: [16, 32]
  })
  const viñaUvaGrande = L.icon({
    iconUrl: '',
    iconSize: [32, 32],
    iconAnchor: [16, 32]
  })


  





  // estados del cerezo
  const cerezoCapullo = L.icon({
    iconUrl: '/images/cerezas.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32]
  })
  const cerezoInicioFlor = L.icon({
    iconUrl: '',
    iconSize: [32, 32],
    iconAnchor: [16, 32]
  })
  const cerezoMaxFloracion = L.icon({
    iconUrl: '',
    iconSize: [32, 32],
    iconAnchor: [16, 32]
  })
  const cerezoMuerto = L.icon({
    iconUrl: '',
    iconSize: [32, 32],
    iconAnchor: [16, 32]
  })

  // estados de la lavanda
  const LavandaCapullo = L.icon({
    iconUrl: '/images/cerezas.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32]
  })
  const LavandaInicioFlor = L.icon({
    iconUrl: '',
    iconSize: [32, 32],
    iconAnchor: [16, 32]
  })
  const LavandaMaxFloracion = L.icon({
    iconUrl: '',
    iconSize: [32, 32],
    iconAnchor: [16, 32]
  })
  const LavandaMuerto = L.icon({
    iconUrl: '',
    iconSize: [32, 32],
    iconAnchor: [16, 32]
  })



  // estados del olivo
  const olivoFlor = L.icon({
    iconUrl: '/images/cerezas.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32]
  })
  const olivoPequenio = L.icon({
    iconUrl: '',
    iconSize: [32, 32],
    iconAnchor: [16, 32]
  })
  const olivoMediano = L.icon({
    iconUrl: '',
    iconSize: [32, 32],
    iconAnchor: [16, 32]
  })
  const olivoGrande = L.icon({
    iconUrl: '',
    iconSize: [32, 32],
    iconAnchor: [16, 32]
  })





  // {
  //   puntosInteres.map(punto => {
  //     console.log(punto)
  //     return L.marker([punto.latitud, punto.longitud])
  //   })
  // }

  // L.marker([puntosInteres[0].latitud, puntosInteres[0].longitud]).addTo(ourMap)

  return (
    <div id="map" ref={mapRef} className='w-full h-[500px]' />
  );
}







// import { MapContainer, TileLayer, Marker, Popup, useMapEvents, useMap } from 'react-leaflet';
// import React, { useEffect, useRef } from 'react';
// import 'leaflet/dist/leaflet.css'; // Importa los estilos de Leaflet




// const location = {
//     "lat": 41.393620,
//     "long": 2.153842
// }




// export default function Mapa() {

//     return (
//         <div className='w-full bg-red-300' >
//             <MapContainer
//                 center={[41.6092, 2.1477]}
//                 style={{ height: "500px", width: "100%" }}
//                 zoom={8}
//                 scrollWheelZoom={true}>
//                 <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//             </MapContainer>





//         </div>
//     )
// }


