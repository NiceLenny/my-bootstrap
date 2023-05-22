import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import "./App.css"
import { useState,useEffect} from 'react';
import axios from 'axios';
import Home from './components/Home';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import React from 'react';


export const AppContext = React.createContext({})

function App() {
//хранения данных туров
const [rolls, setRolls] = useState([])

useEffect (()=>{
  async function axiosData(){
    const rollsData = await axios.get('https://646b1deb7d3c1cae4ce336e1.mockapi.io/Roll')
   
    setRolls(rollsData.data)
   
  }
  axiosData();
},[])


  return (
    <div>

      <Router>
        <Header/>
          <Routes>          
          <Route path='/'
              element={
                <Home
                  item={rolls}
                />
              }
            />
        </Routes>
      </Router> 

      <Footer/>
    </div>
  );
}

export default App;


