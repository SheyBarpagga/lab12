import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import axios from 'axios'
import Pagination from './pagination';

var pokemons;


function App() {
  const [currentPage, setCurrentPage] = useState(1);

  axios.get('https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json')
      .then(res => res.data)
      .then(res => {
          //localStorage.setItem('pokemon', res)
          pokemons = res
      })
      .catch(err => console.log("err", err)).then(()=> {

        console.log(pokemons)
        const last = currentPage * 10;
        const first = last - 10;
        const numPage = Math.ceil(localStorage.getItem('pokemon').length / 10);
        const curr = pokemons.slice(first, last)

          return(
            <>
          <div>
              <h1>Page: {currentPage}</h1>
              <div className='pokelist'>
                  {
                      curr.map(pokemon => {
                          return <p>{pokemon.name.english} </p>
                      })
                  }
              </div>
              <div>

                  < Pagination 
                  currentPage = {currentPage} 
                  setCurrentPage = {setCurrentPage} 
                  numPage = {numPage}
                  />

              </div>
          </div>  
          </>
          );
      })
      

}


export default App;
