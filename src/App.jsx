import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import "./App.css"
import { useState,useEffect} from 'react';
import axios from 'axios';
import Home from './components/Home';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import React from 'react';
import Favorites from './components/Favorites';
import Info from './components/Info';


export const AppContext = React.createContext({})

function App() {
//хранения данных туров
const [tyrs, setTyrs] = useState([])
//для хранения избранных
const [favorites, setFavorites] = useState([])
//для хранения объектов корзины
const [cartItems, setCartItems] = useState([])

useEffect (()=>{
  async function axiosData(){
    const tyrsData = await axios.get('https://637f91ca2f8f56e28e904e7d.mockapi.io/tyrs')
   
    setTyrs(tyrsData.data)
   
  }
  axiosData();
},[])


  return (
    <div>

      <Router>
        <Header/>
          <Routes>

            <Route path='/favorites'
              element={
                <Favorites
                favorites = {favorites}
                setFavorites={setFavorites}
                cartItems={cartItems}
                />
              }
            />
          
          <Route path='/'
              element={
                <Home
                  item={tyrs}
                />
              }
            />
            <Route path='/info'
              element={
                <Info/>
              }
            />

            <Route path='/form'
                element={
                        <Form/>
                    }
                />



        </Routes>
      </Router> 

      <Footer/>
    </div>
  );
}

export default App;


