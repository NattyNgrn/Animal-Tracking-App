import express from "express";
import cors from "cors";
import pg from "pg";


const DB = new pg.Client({
    user: 'me',
    host: 'localhost',
    database: 'week10',
    password: 'password',
    port: 5432
});

DB.connect();

const server = Bun.serve({
    port: 9090,
    async fetch(req) {
        const url = new URL(req.url);
        if(url.pathname === "/") {
            const animals = await getAnimals();
            return new Response(animals);
        }
        if(url.pathname === "/delete") return new Response("deleting");
        if(url.pathname === "/update") return new Response("updating");
        if(url.pathname === "/adding") return new Response("adding");
        //when i make a request this should print in terminal
        console.log("working!")
        return new Response("Bun!");
        
    },
});

async function getAnimals() {
    const result = await DB.query("SELECT * FROM animaltracking.animals");
    const rows = result.rows;
    console.log(rows);
    return rows;
}

console.log(`Listening to port ${server.port}`);