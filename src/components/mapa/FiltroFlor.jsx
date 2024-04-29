import React, { useEffect, useState, useRef } from 'react';



export const FiltroFlor = ({ selectedRadio, setSelectedRadio }) => {

    const handleChange = (event) => {
        setSelectedRadio(event.target.value)
    }
    return (
        <>
            <form className='rounded-full w-fit flex  mx-auto mb-4 border border-[#e8e8e8] shadow
            xl:mb-5' >
                <label className={`rounded-full md:px-6 md:py-2.5 px-2 py-1.5 font-medium ${selectedRadio === 'todasFlores' ? 'bg-[#53cd68] text-[#fafafa] ' : ''}`}
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
                <label className={`rounded-full md:px-6 md:py-2.5 px-2 py-1.5 font-medium ${selectedRadio === 'cerezo' ? 'bg-[#53cd68] text-[#fafafa] ' : ''}`}
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
                <label className={`rounded-full md:px-6 md:py-2.5 px-2 py-1.5 font-medium ${selectedRadio === 'olivo' ? 'bg-[#53cd68] text-[#fafafa] ' : ''}`}
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
                <label className={`rounded-full md:px-6 md:py-2.5 px-2 py-1.5 font-medium ${selectedRadio === 'viña' ? 'bg-[#53cd68] text-[#fafafa] ' : ''}`}
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
                <label className={`rounded-full md:px-6 md:py-2.5 px-2 py-1.5 font-medium ${selectedRadio === 'lavanda' ? 'bg-[#53cd68] text-[#fafafa] ' : ''}`}
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