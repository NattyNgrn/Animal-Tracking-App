const API = "http://localhost:9090/";

// get the join table for the animal table

async function getSightings() {
    const results = await fetch(API + "sightings");
    const sightings = await results.json();
    console.log(sightings);
    return sightings;
}

getSightings();

//post new species

async function newSpecies(){

}

//post new sighting
async function newSighting(){
    
}


//post new individual
async function newIndividual(){
    
}

export {getSightings};