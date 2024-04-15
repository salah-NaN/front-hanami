import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import L, { Marker, icon, map } from 'leaflet'
import 'leaflet/dist/leaflet.css';
import SliderCustom from '../SliderCustom';

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
  // state para controlar que se ejecute solo una vez
  const [primerRenderv2, setPrimerRenderv2] = useState(true)
  // instancia del useNavigate para usar el redirect al clicar un marker
  const redirect = useNavigate()
  // state para guardar la fecha seleccionada por slider
  const [fechaSlider, setFechaSlider] = useState(new Date().getDate())
  const [mapa, setMapa] = useState(false)

  // los iconos de todas las etapas de los arboles florales
  const etapas = ['ViñaFlor', 'ViñaUvaPequenia', 'ViñaUvaMediana', 'ViñaUvaGrande',
    'CerezoCapullo', 'CerezoInicioFlor', 'CerezoMaxFloracion', 'CerezoMuerto', 'CerezoPequenio', 'CerezoMediano', 'CerezoGrande',
    'LavandaCapullo', 'LavandaInicioFlor', 'LavandaMaxFloracion', 'LavandaMuerta',
    'OlivoFlor', 'OlivoPequenio', 'OlivoMediano', 'OlivoGrande']

  // mapeo de los nombres de temporada a todos los iconos correspondientes
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


  // creación del mapa y todos los markers según el fetch de la api
  useEffect(() => {
    if (!primerRender) {

      const ourMap = L.map(mapRef.current).setView([41.6092, 2.1477], 9);

      setMapa(ourMap)


      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(ourMap);


      // mapeo de todos los markers y asignacion de diseño de marker en el array de etapas
      puntosInteres.map(punto => {
        // extraer las temporadas que coincida con la fecha de hoy
        const temporadasCoincidentes = punto.temporadas.filter(temporada => fechaInluidaEnRangoFechas(new Date(), new Date(temporada.fecha_inicio), new Date(temporada.fecha_fin)) && temporada.flor_id !== null)
        // distinción de si 0 temporadas, 1 o más
        return temporadasCoincidentes.length === 0
          ?
          null
          :
          (
            temporadasCoincidentes.length === 1
              ?
              L
                .marker([punto.latitud, punto.longitud], { icon: iconos.find(icon => Object.keys(icon)[0] === temporadasCoincidentes[0].nombre)[temporadasCoincidentes[0].nombre] })
                .addTo(ourMap)
                .on('click', () => {
                  redirect(`/puntosInteres/${punto.id}`)
                })
                .on('mouseover', function (e) {
                  L.popup()
                    .setLatLng(e.latlng)
                    .setContent(`
                      <div>
                        <h6>${punto.nombre}</h6>
                        <div>
                          ${temporadasCoincidentes.map(t => `<img style='width:40px; margin: auto ' src="/images/${t.nombre}.png" alt="${t.nombre}" />`).join('')}
                        </div>
                      </div>
                    `)
                    .openOn(ourMap);
                })
              :
              L
                .marker([punto.latitud, punto.longitud], { icon: moreIcon })
                .addTo(ourMap)
                .on('click', () => {
                  redirect(`/puntosInteres/${punto.id}`)
                })
                .on('mouseover', function (e) {
                  L.popup()
                    .setLatLng(e.latlng)
                    .setContent(`
                      <div>
                        <h6>${punto.nombre}</h6>
                        <div>
                          ${temporadasCoincidentes.map(t => `<img style='width:40px; margin: auto ' src="/images/${t.nombre}.png" alt="${t.nombre}" />`).join('')}
                        </div>
                      </div>
                    `)
                    .openOn(ourMap);
                })
          )
      })

      //   return () => {
      //     ourMap.off()
      //     ourMap.remove()
      // }

    } else {
      setPrimerRender(false)
    }
  }, [puntosInteres])


  // distribución de los markers en cada punto del mapa
  useEffect(() => {
    if (!primerRenderv2) {

      const fecha2 = new Date()
      const fecha = new Date()
      fecha.setDate(fechaSlider)
      
      // antes de mapear los markers se han de eliminar previamente
      mapa.eachLayer((layer) => {
        if (layer instanceof L.Marker) {
           layer.remove();
        }
      });

      // mapeo de todos los markers y asignacion de diseño de marker en el array de etapas
      puntosInteres.map(punto => {
        // extraer las temporadas que coincida con la fecha de hoy
        const temporadasCoincidentes = punto.temporadas.filter(temporada => fechaInluidaEnRangoFechas(fecha, new Date(temporada.fecha_inicio), new Date(temporada.fecha_fin)) && temporada.flor_id !== null)
        // distinción de si 0 temporadas, 1 o más

        console.log(temporadasCoincidentes)

        return temporadasCoincidentes.length === 0
          ?
          null
          :
          (
            temporadasCoincidentes.length === 1
              ?
              L
                .marker([punto.latitud, punto.longitud], { icon: iconos.find(icon => Object.keys(icon)[0] === temporadasCoincidentes[0].nombre)[temporadasCoincidentes[0].nombre] })
                .addTo(mapa)
                .on('click', () => {
                  redirect(`/puntosInteres/${punto.id}`)
                })
                .on('mouseover', function (e) {
                  L.popup()
                    .setLatLng(e.latlng)
                    .setContent(`
                      <div>
                        <h6>${punto.nombre}</h6>
                        <div>
                          ${temporadasCoincidentes.map(t => `<img style='width:40px; margin: auto ' src="/images/${t.nombre}.png" alt="${t.nombre}" />`).join('')}
                        </div>
                      </div>
                    `)
                    .openOn(mapa);
                })
              :
              L
                .marker([punto.latitud, punto.longitud], { icon: moreIcon })
                .addTo(mapa)
                .on('click', () => {
                  redirect(`/puntosInteres/${punto.id}`)
                })
                .on('mouseover', function (e) {
                  L.popup()
                    .setLatLng(e.latlng)
                    .setContent(`
                      <div>
                        <h6>${punto.nombre}</h6>
                        <div>
                          ${temporadasCoincidentes.map(t => `<img style='width:40px; margin: auto ' src="/images/${t.nombre}.png" alt="${t.nombre}" />`).join('')}
                        </div>
                      </div>
                    `)
                    .openOn(mapa);
                })
          )
      })


      //   return () => {
      //     ourMap.off()
      //     ourMap.remove()
      // }

    } else {
      setPrimerRenderv2(false)
    }
  }, [fechaSlider])

  // funciones
  function fechaInluidaEnRangoFechas(fechaDeterminada, fechaInicial, fechaFinal) {
    return (fechaDeterminada >= fechaInicial && fechaDeterminada <= fechaFinal)
  }

  return (
    <>
      <div id="map" ref={mapRef} className='w-full h-[500px]' ></div>
      <SliderCustom fechaSlider={fechaSlider} setFechaSlider={setFechaSlider} />
    </>
  );
}