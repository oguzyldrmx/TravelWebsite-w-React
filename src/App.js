import React from 'react'
import './app.css'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Main from './Components/Main/Main'
import Popular from './Components/Popular/Popular'
import About from './Components/About/About'
import Blog from './Components/Blog/Blog'
import MobileApp from './Components/MobileApp/MobileApp'

const App = () => {
  return (
    <>
    <Navbar/>
    <Home/>
    <Main/>
    <Popular/>
    <About/>
    <Blog/>
    <MobileApp/>
    <Footer/> 
    </>
  )
}

export default App
