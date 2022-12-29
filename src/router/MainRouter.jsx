// import react-router-dom
import { Routes, Route } from 'react-router-dom'
// components
import Navbar from '../components/navbar/Navbar';
import NavbarTop from '../components/navbvarTop/NavbarTop';
// pages
import Home from '../pages/Home';

const MainRouter = () => {
  return (
    <>
        <NavbarTop/>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes>
    </>
  )
}

export default MainRouter