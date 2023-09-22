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


//getting all the events as a list and if it doesnt work it returns an error status
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


//adding an event to the database
app.post('/addsighting', async (req, res) => {
    try{
        //getting these properties from the body
        const {name, date, description, favorite} = req.body;
        console.log(req.body);
        //telling the database to add this new row
        const result = await DB.query(`
            INSERT INTO eventsTable (name, date, description, favorite)
            VALUES ('${name}', '${date}', '${description}', '${favorite}');
        `);
        res.send("success");
    } catch(error){
        console.log(error);
        return res.status(400).json({error});
    
    }
});

app.post('/addspecies', async (req, res) => {
    try{
        //getting these properties from the body
        const {name, date, description, favorite} = req.body;
        console.log(req.body);
        //telling the database to add this new row
        const result = await DB.query(`
            INSERT INTO eventsTable (name, date, description, favorite)
            VALUES ('${name}', '${date}', '${description}', '${favorite}');
        `);
        res.send("success");
    } catch(error){
        console.log(error);
        return res.status(400).json({error});
    
    }
});

app.post('/addindividual', async (req, res) => {
    try{
        //getting these properties from the body
        const {name, date, description, favorite} = req.body;
        console.log(req.body);
        //telling the database to add this new row
        const result = await DB.query(`
            INSERT INTO eventsTable (name, date, description, favorite)
            VALUES ('${name}', '${date}', '${description}', '${favorite}');
        `);
        res.send("success");
    } catch(error){
        console.log(error);
        return res.status(400).json({error});
    
    }
});




app.listen(port, () => console.log(`listening at http://localhost:${port}`));
