

import React from 'react'

const Pacientes = ({paciente, setPaciente,eliminarPaciente}) => {
  
  const { nombre, propietario, email, alta, sintomas, id } = paciente;

  const handleEliminar = () => {
    //() => eliminarPaciente(id)
    const respuesta = confirm('Deseas eliminareste paciente');
    
    if(respuesta){
      eliminarPaciente(id);
    }

  }

  return (
    <div className='m-3 bg-white shadow-md px-5 py-10 rounded-xl' >
          <p className='font-bold mb-0 text-gray-700 uppecase'>
            Nombre: 
            <span className='font-normal normal-case'> { nombre }</span>
          </p>

          <p className='font-bold mb-0 text-gray-700 uppecase'>
            Propietario: 
            <span className='font-normal normal-case'> { propietario }</span>
          </p>

          <p className='font-bold mb-0 text-gray-700 uppecase'>
            Correo Electronico: 
            <span className='font-normal normal-case'> { email }</span>
          </p>

          <p className='font-bold mb-0 text-gray-700 uppecase'>
            Fecha de Alta: 
            <span className='font-normal normal-case'> { alta }</span>
          </p>

          <p className='font-bold mb-0 text-gray-700 uppecase'>
            Sintomas: 
            <span className='font-normal normal-case'> { sintomas }</span>
          </p>

          <div className='flex justify-between mt-3'>
            <button 
                type='button' 
                className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg' 
                onClick={()=> setPaciente(paciente)}
                >Editar
            </button>

            <button 
                type='button' 
                className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg' 
                onClick={ handleEliminar}
                >Eliminar
            </button>
          </div>
        </div>
  )
}

export default Pacientes