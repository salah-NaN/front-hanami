import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import L, { Marker, icon, map } from 'leaflet'
import 'leaflet/dist/leaflet.css';
import SliderCustom from '../SliderCustom';
import './zoomStyleMap.css'

//constantes
const URL = 'http://localhost:3000/api'


// las imágenes de los cerezos
// import cerezas from '../../../public/images/cerezas'

export default function Mapa({ puntosInteres, setPuntosInteres, latlonzoom }) {
    // referencia del mapa
    const mapRef = useRef(null)
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
                iconUrl: `http://localhost:3000/img/${icono}.png`,
                iconSize: [28, 28],
                iconAnchor: [14, 28]
            })
        }
    ))
    // el icono de más de una temporada
    const moreIcon = L.icon({
        iconUrl: `http://localhost:3000/img/moreIcon.svg`,
        iconSize: [28, 28],
        iconAnchor: [14, 28]
    })

    useEffect(() => {

        console.log(latlonzoom)
        const ourMap = L.map(mapRef.current, { zoomControl: false }).setView([latlonzoom[0], latlonzoom[1]], latlonzoom[2]);

        setMapa(ourMap)

        let googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
            maxZoom: 20,
            subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
        });
        googleStreets.addTo(ourMap)

        L.control.zoom({
            position: 'topright'
        }).addTo(ourMap);
    }, [])


    // creación del mapa y todos los markers según el fetch de la api
    useEffect(() => {
        if (!primerRender && mapa) {
            mapa?.eachLayer((layer) => {
                if (layer instanceof L.Marker) {
                    layer.remove();
                }
            });

            // const ourMap = L.map(mapRef.current).setView([41.6092, 2.1477], 9);

            // setMapa(ourMap)


            // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            //     attribution: '© OpenStreetMap contributors'
            // }).addTo(ourMap);

            // vista Google Steets
            // let googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
            //     maxZoom: 20,
            //     subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
            // });
            // googleStreets.addTo(ourMap)


            // vista satelital
            // var mapLink = '<a href="http://www.esri.com/">Esri</a>';
            // var wholink = 'i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community';

            // L.tileLayer(
            //     'http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            //     attribution: '&copy; ' + mapLink + ', ' + wholink,
            //     maxZoom: 18,
            // }).addTo(ourMap);


            // mapeo de todos los markers y asignacion de diseño de marker en el array de etapas
            puntosInteres.map(punto => {



                // extraer las temporadas
                const temporadasCoincidentes = punto.temporadas
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
                          ${temporadasCoincidentes.map(t => `<img style='width:40px; margin: auto ' src="http://localhost:3000/img/${t.nombre}.png" alt="${t.nombre}" />`).join('')}
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
                          ${temporadasCoincidentes.map(t => `<img style='width:40px; margin: auto ' src="http://localhost:3000/img/${t.nombre}.png" alt="${t.nombre}" />`).join('')}
                        </div>
                      </div>
                    `)
                                        .openOn(mapa);
                                })
                    )
            })


        } else {
            setPrimerRender(false)
        }
    }, [puntosInteres])



    return (
        <>
            <div id="map" ref={mapRef} className={`w-full ${location.pathname === '/' ? 'h-[500px]' : 'h-full'}`} ></div>
        </>
    );
}