import React, {useState} from 'react'


function Character({person}) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  
  const [homeworld, setHomeWorld] = useState(false);

  return (
    <>
    <div className="character-card" onClick={() => {setHomeWorld(!homeworld)}}>
      {/* Use the same markup with the same attributes as in the mock */}
      <h3 className="character-name">{person.name}</h3>  
      {homeworld ? <p>Planet: <span className="character-planet">{person.planet.name}</span></p> : ''}
    </div> 
    </>
  )
}

export default Character
