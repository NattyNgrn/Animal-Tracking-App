import { useState } from 'react'
import './App.css'
import Ind from "./components/individual"
import Sightings from "./components/sightings"

//need two forms
//first one is for whos tracking which individual animal
//second is for sightings 

function App() {
  const [isShown, setIsShown] = useState(false);
  const handleClick = event => setIsShown(!isShown);
  return (

      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }}>
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            height: '100%',
        }}>
        <div className="mt-6 flex items-center justify-end gap-x-6">
        {!isShown ?
          <button onClick={handleClick} style={{margin: '20px'}} className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Add Sighting
          </button>
          : <div></div>
        } 
          {/*if isshown is true then it shows the addevent component also passing refresh in so it refreshes the page when event is added */}
          {isShown ? <Sightings setIsShown={setIsShown} ></Sightings> : <div></div>}
          </div>
          </div>

        <Ind/>
      </div>
  )
}

export default App;
