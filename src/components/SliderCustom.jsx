import React, { useEffect, useState, useRef } from 'react';
import Slider from '@mui/material/Slider';


const fechaActual = new Date()
const marks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

// funcion para crear el las marcas dinámicas
const setMarks = () => {
  const mapeado = marks.map((mark) => {
    // const o = { value: fechaActual.getDate(), label: fechaActual.toLocaleDateString().split('').reverse().join('').slice(5).split('').reverse().join('')}
    const o = { value: fechaActual.getDate(), }
    fechaActual.setDate(fechaActual.getDate() + 1)
    return o
  })

  fechaActual.setDate(new Date())
  return mapeado
}

const fechas = setMarks()


export default function SliderCustom({ fechaSlider, setFechaSlider }) {

  // resto de funciones 
  const handleSlider = (event, nextValue) => {
    setFechaSlider(nextValue)
  }

  return (
    <div className='mt-9 z-50'>
      <Slider
        aria-label="Temperature"
        defaultValue={(new Date().getDate())}
        // getAriaValueText={valuetext}
        step={null}
        valueLabelDisplay="auto"
        marks={fechas}
        min={1}
        max={31}
        onChange={handleSlider}
      />
    </div>
  );
}