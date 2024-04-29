import React, { useEffect, useState, useRef } from 'react';
import Slider from '@mui/material/Slider';
import { createTheme, ThemeProvider } from '@mui/material/styles';



const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#53cd68',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

const fechaActual = new Date()

const marks = Array(diasDelMesActual()).fill(null).map((_, i) => i + 1);

const setMarks = () => {
  const mapped = marks.map((mark) => {
    const actualDate = new Date(new Date().setDate(mark));
    const o = { value: mark, label: mark % 4 === 0 ? actualDate.toLocaleDateString().split('').reverse().join('').slice(5).split('').reverse().join('') : '' }
    return o
  })

  return mapped
}

const fechas = setMarks()

function diasDelMesActual() {
  const fechaActual = new Date();
  const mesActual = fechaActual.getMonth() + 1;
  const añoActual = fechaActual.getFullYear();
  return new Date(añoActual, mesActual, 0).getDate();
}

export default function SliderCustom({ fechaSlider, setFechaSlider }) {

  // resto de funciones 
  const handleSlider = (event, nextValue) => {
    setFechaSlider(nextValue)
  }

  return (



    <ThemeProvider theme={theme}>
      <div className='mt-9 z-50'>
        <Slider
          aria-label="Custom marks"
          defaultValue={(new Date().getDate())}
          // getAriaValueText={valuetext}
          step={null}
          valueLabelDisplay="auto"
          marks={fechas}
          min={1}
          max={diasDelMesActual()}
          onChange={handleSlider}
          color="primary"
        />
      </div>
    </ThemeProvider>
  );
}