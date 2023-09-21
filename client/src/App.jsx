import { useState } from 'react'
import './App.css'
import Ind from "./components/individual"
import Sightings from "./components/sightings"
import Animaltable from "./components/animaltable";

//need two forms
//first one is for whos tracking which individual animal
//second is for sightings 

function App() {
    const [pageToShow, setPageToShow] = useState("home");

    switch (pageToShow) {
        case "home" : return (<Home setPageToShow={setPageToShow}></Home>);
        case "sightings": return (<Sightings setPageToShow={setPageToShow}></Sightings>);
        case "individual": return (<Ind setPageToShow={setPageToShow}></Ind>);
    }
};

function Home({setPageToShow}) { 
  
  const handleClick = event => setPageToShow("sightings");
  const handleClick2 = event => setPageToShow("individual");
  const [data, setData] = useState([]);
  
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

    
        <div class="absolute top-0 left-px p-6">
            <h1 class="text-4xl font-bold">Animal Tracker</h1>
        </div>

        
        <div className="mt-6 flex items-center justify-end gap-x-6">
            <button onClick={handleClick} style={{margin: '20px'}} className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
 >
                Add Sighting
            </button>
        </div>


        <div className="mt-6 flex items-center justify-end gap-x-6">         
            <button onClick={handleClick2} style={{margin: '20px'}} className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
>
                Add a New Animal
            </button>
        </div>
        </div>


    <div>
        <Animaltable data={data}/>
    </div>
    
</div>

  );
}

export default App;
