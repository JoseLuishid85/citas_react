import React from 'react'
import Pacientes from './Pacientes'

const ListadoPacientes = ({pacientes, setPaciente,eliminarPaciente}) => {


  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
        
        { pacientes && pacientes.length ? (
          <h2 className='font-black text-3xl text-center' >Listado de Pacientes</h2>
        ) : (
          <h2 className='font-black text-3xl text-center' >No hay Pacientes</h2>
        ) }
        
        <p className='text-xl text-center mt-5 mb-10'>
          Administrar tus
          <span className='text-indigo-600 font-bold'> Pacientes y Citas</span>
        </p>

        { pacientes.map( (paciente) =>(
            <Pacientes 
                key={paciente.id}
                paciente={paciente}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
                />
          )) }

        
        

    </div>
  )
}

export default ListadoPacientes