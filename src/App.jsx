import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Sobre from './components/Sobre';
import Habilidades from './components/Habilidades';
import Projetos from './components/Projetos';
import './App.css'
import Logo from "./img/logo.png"
import Footer from './components/Footer';

export default function App(){
  
  return(
    <Router>
    <div className='App'>
      <div className='header'>
        <img src={Logo} className="logo"/>
        <ul className='menu'>
          <li className='itens-menu'> <Link className='itens' to='/'>Home</Link> </li>
          <li className='itens-menu'> <Link className='itens' to='/Sobre'>Sobre</Link></li>
          <li className='itens-menu'> <Link className='itens' to='/Habilidade'>Habilidades</Link></li>
          <li className='itens-menu'> <Link className='itens' to='/Projetos'>Projetos</Link></li>
        </ul>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Sobre' element={<Sobre/>}/>
        <Route path='/Habilidade' element={<Habilidades/>}/>
        <Route path='/Projetos' element={<Projetos/>}/>
      </Routes>
      <Footer/>
    </div>
    </Router>
  )

  
}