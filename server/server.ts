console.log("Hello via Bun!");
import express from "express";
import cors from "cors";



Bun.serve({
    port: 8080, // defaults to $BUN_PORT, $PORT, $NODE_PORT otherwise 3000
    hostname: "natngrn.com", // defaults to "0.0.0.0"
    fetch(req) {
        const url = new URL(req.url);
        if(url.pathname === "/") return new Response("homepage!");
        if(url.pathname === "/delete") return new Response("deleting");
        if(url.pathname === "/update") return new Response("updating");
        if(url.pathname === "/adding") return new Response("adding");
        return new Response("404!");
    },
});
