import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/hero'
import Destinations from './Components/Destinations'
import Search from './Components/Search'
import Selects from './Components/Selects'
import Cards from './Components/Cards'
import { Carousel, Footer } from 'flowbite-react'




function App() {


  return (
    <div >
     {/* <h1>Hey</h1> */}
     <Navbar/>
     <Hero/>
     <Destinations/>
     <Search/>
     <Selects/>
     <Cards/>
     <Footer/>
     <Carousel/>
    </div>

  )
}

export default App
