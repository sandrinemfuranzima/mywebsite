import React from 'react'
import BoraBora from '../assets/borabora.jpg'
import BoraBora2 from '../assets/borabora2.jpg'
import Maldives from '../assets/maldives.jpg'
import Maldives2 from '../assets/maldives2.jpg'
import Maldives3 from '../assets/maldives3.jpg'
import KeyWest from '../assets/keywest.jpg'
import Cards from './Cards'


const Selects = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>

    <Cards bg={BoraBora} text='Bora Bora' />
    <Cards bg={BoraBora2} text='Maldives' />
    <Cards bg={Maldives} text='Antigua' />
    <Cards bg={Maldives2} text='Cozumel' />
   <Cards bg={Maldives3} text='Jamaica' />
    <Cards bg={KeyWest} text='Key West' />
    
        
    </div>
  )
}

export default Selects