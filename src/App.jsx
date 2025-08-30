import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Rootlayout from './components/layout/Rootlayout'
import Home from './components/page/Home'
import Shop from './components/page/Shop'
import Collection from './components/page/Collection'
import Journal from './components/page/Journal'
import Lookbook from './components/page/Lookbook'
import Page from './components/page/Page'


function App() {
 

  return (
    <>
    <Routes>
      <Route path='/' element={<Rootlayout/>}>
        <Route index element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='collection' element={<Collection/>}/>
        <Route path='journal' element={<Journal/>}/>
        <Route path='lookbook' element={<Lookbook/>}/>
        <Route path='page' element={<Page/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
