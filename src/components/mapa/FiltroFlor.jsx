import React, { useEffect, useState, useRef } from 'react';



export const FiltroFlor = ({ selectedRadio, setSelectedRadio }) => {

    const handleChange = (event) => {
        setSelectedRadio(event.target.value)
    }
    return (
        <>
            <form className='rounded-full w-fit flex  mx-auto mb-3.5 border-2 border-[#53cd68]' >
                <label className={`rounded-full px-3 ${selectedRadio === 'todasFlores' ? 'bg-[#53cd68] text-[#fafafa] ' : ''}`}
                    htmlFor='todasFlores'>Todo</label>
                <input
                    id='todasFlores'
                    type='radio'
                    name='todasFlores'
                    value='todasFlores'
                    checked={selectedRadio === 'todasFlores'}
                    onChange={handleChange}
                    className='appearance-none'
                />
                <label className={`rounded-full px-3 ${selectedRadio === 'cerezo' ? 'bg-[#53cd68] text-[#fafafa] ' : ''}`}
                    htmlFor='cerezo'>Cerezo</label>
                <input
                    id='cerezo'
                    type='radio'
                    name='cerezo'
                    value='cerezo'
                    checked={selectedRadio === 'cerezo'}
                    onChange={handleChange}
                    className='appearance-none'
                />
                <label className={`rounded-full px-3 ${selectedRadio === 'olivo' ? 'bg-[#53cd68] text-[#fafafa] ' : ''}`}
                    htmlFor='olivo'>Olivo</label>
                <input
                    id='olivo'
                    type='radio'
                    name='olivo'
                    value='olivo'
                    checked={selectedRadio === 'olivo'}
                    onChange={handleChange}
                    className='appearance-none'
                />
                <label className={`rounded-full px-3 ${selectedRadio === 'viña' ? 'bg-[#53cd68] text-[#fafafa] ' : ''}`}
                    htmlFor='viña'>Viña</label>
                <input
                    id='viña'
                    type='radio'
                    name='viña'
                    value='viña'
                    checked={selectedRadio === 'viña'}
                    onChange={handleChange}
                    className='appearance-none'
                />
                <label className={`rounded-full px-3 ${selectedRadio === 'lavanda' ? 'bg-[#53cd68] text-[#fafafa] ' : ''}`}
                    htmlFor='lavanda'>Lavanda</label>
                <input
                    id='lavanda'
                    type='radio'
                    name='lavanda'
                    value='lavanda'
                    checked={selectedRadio === 'lavanda'}
                    onChange={handleChange}
                    className='appearance-none'
                />
            </form>
        </>
    )
}

export default FiltroFlor;