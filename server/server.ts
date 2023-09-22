import express from "express";
import cors  from "cors"
import path from "path";
import dotenv from "dotenv"
import DB from "./db.js"
import bodyParser from "body-parser";

dotenv.config();
const app = express();
const port = 9090;

//conifguring cors middleware
app.use(cors());


app.use(bodyParser.urlencoded({ extended: false }));
//tells the server that the body will be a json string and then it turns it into an object
app.use(bodyParser.json());

//connecting the database
DB.connect();

//testing to see if get is working
app.get("/", (req, res) => {
    res.json("WELCOME");
});


//left joining sightings and individual tables 
app.get('/sightings', async (req, res) =>{
    try{
        const result = await DB.query(`
            SELECT * 
            FROM animaltracking.sightings 
            LEFT JOIN animaltracking.individual 
            ON animaltracking.sightings.seenanimal = animaltracking.individual.id
        `);
        const rows = result.rows;
        console.log("animal path working");
        res.send(rows);
    } catch(error){
        console.log(error);
        return res.status(400).json({error});
    }
});

//getting individuals table for the id
app.get('/individuals', async (req, res) =>{
    try{
        const result = await DB.query(`
            SELECT * FROM animaltracking.individual
        `);
        const rows = result.rows;
        console.log("animal path working");
        res.send(rows);
    } catch(error){
        console.log(error);
        return res.status(400).json({error});
    }
});


//adding an individual to db
app.post('/addindividual', async (req, res) => {
    try{
        //getting these properties from the body
        const {nickname, speciestracking, recorded, first, last } = req.body;
        console.log(req.body);
        //telling the database to add this new row
        const result = await DB.query(`
            INSERT INTO animaltracking.individual (nickname, speciestracking, recorded, first, last)
            VALUES ('${nickname}', '${speciestracking}', '${recorded}', '${first}', '${last}');
        `);
        res.send("success");
    } catch(error){
        console.log(error);
        return res.status(400).json({error});
    
    }
});

//adding sighting to db
app.post('/addsighting', async (req, res) => {
    try{
        //getting these properties from the body
        const {spotted, seenanimal, location, healthy, email, recorded} = req.body;
        console.log(req.body);
        //telling the database to add this new row
        const result = await DB.query(`
            INSERT INTO animaltracking.sightings (spotted, seenanimal, location, healthy, email, recorded)
            VALUES ('${spotted}', ${seenanimal}, '${location}', ${healthy}, '${email}', '${recorded}');
        `);
        res.send("success");
    } catch(error){
        console.log(error);
        return res.status(400).json({error});
    
    }
});




app.listen(port, () => console.log(`listening at http://localhost:${port}`));
