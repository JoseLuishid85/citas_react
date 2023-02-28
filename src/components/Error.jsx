import {React, useEffect, useState} from 'react'

const Error = (props) => {
  return (
    <div className='bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md'>
        <p>{ props.mensaje }</p>
    </div> 
  )
}

export default Error