import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  // ❗ Create state to hold the data from the API
  // ❗ Create effects to fetch the data and put it in state

   const [people, setPeople] = useState([]); 
  
  useEffect(() =>{
   axios.get(urlPeople)
   .then(res => {
    axios.get(urlPlanets)
    .then(res2 => {
      const people = res.data;
      const planets = res2.data;
      const updatedPeople = people.map(person => {
        return {...person, planet: planets.find(planet => planet.id === person.homeworld)};
      }) 
      setPeople(updatedPeople);
    })
   })
  },[])

  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {/* ❗ Map over the data in state, rendering a Character at each iteration */}
      {people.map( person => {
        return <Character key={person.id} person={person}/>
      })}  
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
