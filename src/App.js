import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonListAxios, setPokemonListAxios] = useState([]);

  //arrow function getPokemon
  const getPokemonList = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=807') //had to change offset and limit to give us the right pokemon and right amount of pokemons we wanted
      .then(res=> {
        return res.json();
      })
        .then(res=> {
          // console.log(res)
          setPokemonList(res.results)
          console.log(pokemonList)
        })
      .catch(err => {
        console.log(err)
      })
  }

  //axios pokemon api
  const getPokemonListAxios = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=807')
      .then(res=> {
        return res;
        // console.log(res))
      }).then (res=> {
        setPokemonListAxios(res.data.results)
      })
      .catch(err=>console.log(err))
      }



  const style = {
    marginLeft: "40px",
    display: "flex",
    justifyContent: "space-evenly",
  }

  // const width = {
  //   width: "10px",
  //   textAlign: "center"
  // }

  return (
    <div style={style}>
      <div>
        <h2>Pokemon List with Fetch</h2>
        <button onClick={getPokemonList}>Fetch 807 Pokemon</button>
        <ul>
          {
            pokemonList.map((pokemon, i) => {
              return (<li key={i+1}>{pokemon.name.charAt(0).toUpperCase()+pokemon.name.slice(1)}</li>)
            })}
        </ul>
      </div>
      <div>
        <h2>Pokemon List with Axios</h2>
        <button onClick={getPokemonListAxios}>Fetch 807 Pokemon w/ Axios</button>
        <ul>
          {
            pokemonListAxios.map((pokemon, i) => {
              return (<li key={i+1}>{pokemon.name.charAt(0).toUpperCase()+pokemon.name.slice(1)}</li>)
            })}
        </ul>
      </div>
    </div>
  );
}
export default App;