import { useState } from "react"

// constantes 
const URL = '/api'

export const Register = () => {
    const [inputs, setInputs] = useState({ nombre: '', email: '', password: '' })


    // funciones 
    const handleInputs = (event) => {
        const { name, value } = event.target
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        // fetch para enviar datos
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inputs),
        }
        fetch(URL + '/clientes/register', options)
            .then(res => res.json())
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
        // limpiar inputs
        setInputs({ nombre: '', email: '', password: '' })
    }

    return (
        <div className=" w-11/12 mx-auto border border-gray-900 mt-40
        lg:flex lg:h-dvh lg:w-full lg:m-0 lg:border-none">
            <div className="flex flex-col px-7 py-4
            lg:w-1/2 lg:mt-60" >
                <form onSubmit={handleSubmit} className="flex flex-col w-full gap-4">
                    <label
                        className="">Nombre</label>
                    <input
                        className="border border-gray-900"
                        type="text"
                        name="nombre"
                        value={inputs.nombre}
                        onChange={handleInputs}
                    ></input>
                    <label
                        className="">Email</label>
                    <input
                        className="border border-gray-900"
                        type="email"
                        name="email"
                        value={inputs.email}
                        onChange={handleInputs}
                    ></input>
                    <label
                        className="">Password</label>
                    <input
                        className="border border-gray-900"
                        type="password"
                        name="password"
                        value={inputs.password}
                        onChange={handleInputs}
                    ></input>

                    <button
                        className="">Enviar</button>
                </form>
            </div>

            <div className="hidden 
            lg:block lg:w-1/2  lg:bg-sky-800" ></div>
        </div>
    )
};

export default Register;