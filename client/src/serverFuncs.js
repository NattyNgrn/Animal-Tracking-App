const API = "http://localhost:9090/";

// get the join table for the animal table

async function getSightings() {
    const results = await fetch(API + "sightings");
    const sightings = await results.json();
    console.log(sightings);
    return sightings;
}

async function getIndividuals() {
    const results = await fetch(API + "individuals");
    const individuals = await results.json();
    console.log(individuals);
    return individuals;
}



//post new species

async function newSpecies(){

}

//post new sighting
async function newSighting(spotted, seenanimal, location, healthy, email, recorded){
    const result = await fetch(API + `addsighting`, {
        //tells the fucntion where to route it
        method: "POST",
        //turns it into a big string so that it can be sent to the server and body parser can turn it into an object
        body: JSON.stringify({
            spotted: spotted,
            seenanimal: seenanimal,
            location: location, 
            healthy: healthy, 
            email: email, 
            recorded: recorded
        }),
        //just tells it that the body type is json
        headers: {
            'Content-Type': 'application/json'
        }
    });
    console.log(result);
}




//post new individual
async function newIndividual(nickname, speciestracking, recorded, first, last){
    const result = await fetch(API + `addindividual`, {
        //tells the fucntion where to route it
        method: "POST",
        //turns it into a big string so that it can be sent to the server and body parser can turn it into an object
        body: JSON.stringify({
            nickname: nickname,
            speciestracking: speciestracking,
            recorded: recorded,
            first: first,
            last: last
        }),
        //just tells it that the body type is json
        headers: {
            'Content-Type': 'application/json'
        }
    });
    console.log(result);
};




export {getSightings, newIndividual, newSighting, getIndividuals};