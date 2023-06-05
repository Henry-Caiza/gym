import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { Hero } from './components/HeroSection/Hero'
import { Programs } from './components/Programs/Programs'
import { Features } from './components/Features/Features'
import { Plans } from './components/Plans/Plans'
import { Testimonials } from './components/Testimonials/Testimonials'
import { Join } from './components/Join/Join'
import { Footer } from './components/Footer/Footer'

import './App.css'



function App() {

  return (
    <div>
      <Hero />
      <Programs />
      <Features />
      <Plans />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  )
}

export default App
