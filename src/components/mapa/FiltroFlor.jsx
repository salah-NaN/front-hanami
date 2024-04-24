import React, { useEffect, useState, useRef } from 'react';



export const FiltroFlor = ({ selectedRadio, setSelectedRadio }) => {

    const handleChange = (event) => {
        setSelectedRadio(event.target.value)
    }
    return (
        <>
            <form>
                <label htmlFor='todasFlores'>Todo</label>
                <input id='todasFlores' type='radio' name='todasFlores' value='todasFlores' checked={selectedRadio === 'todasFlores'} onChange={handleChange} />
                <label htmlFor='cerezo'>Cerezo</label>
                <input id='cerezo' type='radio' name='cerezo' value='cerezo' checked={selectedRadio === 'cerezo'} onChange={handleChange} />
                <label htmlFor='olivo'>Olivo</label>
                <input id='olivo' type='radio' name='olivo' value='olivo' checked={selectedRadio === 'olivo'} onChange={handleChange} />
                <label htmlFor='viña'>Viña</label>
                <input id='viña' type='radio' name='viña' value='viña' checked={selectedRadio === 'viña'} onChange={handleChange} />
                <label htmlFor='lavanda'>Lavanda</label>
                <input id='lavanda' type='radio' name='lavanda' value='lavanda' checked={selectedRadio === 'lavanda'} onChange={handleChange} />
            </form>
        </>
    )
}

export default FiltroFlor;