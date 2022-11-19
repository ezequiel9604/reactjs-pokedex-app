
import { useState, useEffect } from 'react';

import "./Assets/css/reset.css";
import "./Assets/scss/main.scss";
import Header from "./Header/Header";
import Section from "./Section/Section";
import Footer from "./Footer/Footer";
import UserContext from "./context";

import { Pokemon } from "./DummyData/DummyData";
import { getUsers } from "./api/index";

function App() {

  const [selectedPokemon, setSeletedPokemon] = useState(Pokemon[0]);

  useEffect(() => {

    async function getData(){

      const data = await getUsers()

      console.log(data)

    }

    getData()

  }, [])

  function getPokemonName(listOfPokemon){

    let names = new Set();

    listOfPokemon.forEach((current) => {
      names.add(current.name);
    });

    return Array.from(names);
  }


  function changePokemonByName(name){

    const pok = Pokemon.filter((current) => {
      return current.name === name;
    });

    setSeletedPokemon(pok[0]);
  }

  function changePokemonById(id){

    const pok = Pokemon.filter((current) => {
      return current.id === id;
    });

    setSeletedPokemon(pok[0]);
  }


  return (
    <main>
        <UserContext.Provider value={ {name:'John doe', age:26 }}>
          <Header 
            names={getPokemonName(Pokemon)}
            onChangePokemonByName={changePokemonByName}
            selectedName={selectedPokemon.name} 
            />

          <Section 
            name={selectedPokemon.name} 
            images={selectedPokemon.images} 
            description={selectedPokemon.description} 
            />

          <Footer 
            selectedId={selectedPokemon.id} 
            pokemonsLength={Pokemon.length}
            onChangePokemonById={changePokemonById} />

        </UserContext.Provider>
    </main>
  );
}

export default App;
