import { useState } from 'react'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { Footer } from './components/Footer'
import { Reg } from './components/Reg'
import { Auth } from './components/Auth'
import './App.css'
import { Route, Routes } from 'react-router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
<Route 
    path='/' 
    element={
        <>
            <Header />
            <Main />
            <Footer />
        </>
    } 
/>
<Route path='/reg' element={<Reg/>}/>
<Route path='/auth' element={<Auth/>}/>
    </Routes>


     
    </>
  )
}

export default App
