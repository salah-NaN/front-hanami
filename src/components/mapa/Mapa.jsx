import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import L, { Marker, icon, map } from 'leaflet'
import 'leaflet/dist/leaflet.css';

//constantes
const URL = 'http://localhost:3000/api'

// las imágenes de los cerezos
// import cerezas from '../../../public/images/cerezas'

export default function Mapa() {
  // referencia del mapa
  const mapRef = useRef(null)
  // donde se almacenan todos los puntos de interes
  const [puntosInteres, setPuntosInteres] = useState([])
  // state para controlar que se ejecute solo una vez
  const [primerRender, setPrimerRender] = useState(true)
  // instancia del useNavigate para usar el redirect al clicar un marker
  const redirect = useNavigate()

  // los iconos de todas las etapas de los arboles florales
  const etapas = ['ViñaFlor', 'ViñaUvaPequenia', 'ViñaUvaMediana', 'ViñaUvaGrande',
    'CerezoCapullo', 'CerezoInicioFlor', 'CerezoMaxFloracion', 'CerezoMuerto', 'CerezoPequenio', 'CerezoMediano', 'CerezoGrande',
    'LavandaCapullo', 'LavandaInicioFlor', 'LavandaMaxFloracion', 'LavandaMuerta',
    'OlivoFlor', 'OlivoPequenio', 'OlivoMediano', 'OlivoGrande']


  const iconos = etapas.map(icono => (
    {
      [icono]: L.icon({
        iconUrl: `/images/${icono}.png`,
        iconSize: [28, 28],
        iconAnchor: [14, 28]
      })
    }
  ))
  // el icono de más de una temporada
  const moreIcon = L.icon({
    iconUrl: `/images/moreIcon.svg`,
    iconSize: [28, 28],
    iconAnchor: [14, 28]
  })


  // fetch para sacar todos los puntos de interes y todas sus temporadas
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    }
    fetch(URL + '/todos_puntos_interes', options)
      .then(res => res.json())
      .then(res => {
        // console.log(res)
        setPuntosInteres(res)
      })
      .catch(err => console.log(err))
  }, []);

  useEffect(() => {
    if (!primerRender) {
      // creación del mapa y todos los markers según el fetch de la api
      const ourMap = L.map(mapRef.current).setView([41.6092, 2.1477], 9);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(ourMap);

      // mapeo de todos los markers y asignacion de diseño de marker en el array de etapas
      puntosInteres.map(punto => {
        // borrar
        // extraer la temporada que coincida con la fecha de hoy
        // const laTemporada = punto.temporadas.find(temporada => fechaInluidaEnRangoFechas(new Date(), new Date(temporada.fecha_inicio), new Date(temporada.fecha_fin)))
        // console.log(laTemporada)

        // correccion: se deben sacar las temporadas con un filter
        const temporadasCoincidentes = punto.temporadas.filter(temporada => fechaInluidaEnRangoFechas(new Date(), new Date(temporada.fecha_inicio), new Date(temporada.fecha_fin)))

        // mapeo de las
        // distinción de si 0 temporadas, 1 o más
        return temporadasCoincidentes.length = 0
          ?
          null
          :
          (
            temporadasCoincidentes === 1
              ?
              L
                .marker([punto.latitud, punto.longitud], { icon: iconos.find(icon => Object.keys(icon)[0] === temporadasCoincidentes[0].nombre)[temporadasCoincidentes[0].nombre] })
                .addTo(ourMap)
                .on('click', () => {
                  redirect(`/puntosInteres/${punto.id}`)
                })
                .bindPopup(`<h6>${punto.nombre}</h6>`)
              :
              // aqui está lo de meter el hover con varios iconoss
              // también hay que meterlo en los markers anteriores
              L
                .marker([punto.latitud, punto.longitud], { icon: moreIcon })
                .addTo(ourMap)
                .on('click', () => {
                  redirect(`/puntosInteres/${punto.id}`)
                })
                .bindPopup(`<h6>${punto.nombre}</h6>`)
          )

          

        // esto borrar
        // si no existe temporada no se crea un marcador y ya
        // return laTemporada === undefined ? null :
        //   L
        //     .marker([punto.latitud, punto.longitud], { icon: iconos.find(icon => Object.keys(icon)[0] === laTemporada.nombre)[laTemporada.nombre] })
        //     .addTo(ourMap)
        //     .on('click', () => {
        //       redirect(`/puntosInteres/${punto.id}`)
        //     })
      })
    } else {
      setPrimerRender(false)
    }
  }, [puntosInteres])


  // funciones
  function fechaInluidaEnRangoFechas(fechaDeterminada, fechaInicial, fechaFinal) {
    return (fechaDeterminada >= fechaInicial && fechaDeterminada <= fechaFinal)
  }


  return (
    <div id="map" ref={mapRef} className='w-full h-[500px]' >

    {/* este div se ha de meter en el hover de los markers que tengan más de una temporada */}
      <div>
        <h6>{punto.nombre}</h6>
        <div>
          {temporadasCoincidentes.map(t => <img src={`/images/${t.nombre}.png`} ></img>)}
        </div>
      </div>
      
    </div>
  );
}