const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/characters", async (req, res) => {
    try {
        const response = await axios.get("https://rickandmortyapi.com/api/character");
        const results = response.data.results.map((character) => ({name: character.name, status: character.status, species: character.species, originName: character.origin.name, image: character.image}));
        res.json({results});
    } catch (e) {
        res.json({error: "Error al obtener los personajes"})
    }
});

app.get("/characters/:name", async (req, res) => {
    const name = req.params.name;
    const url = `https://rickandmortyapi.com/api/character/?name=${name}`;
    try {
        const response = await axios.get(url);
        const {results: [ {name, status, species, gender, origin: {name: originName}, image} ]} = response.data;
        res.json({name, status, species, gender, origin: {name: originName}, image});
    } catch (e) {
        res.status(404).json({error: "Personaje no encontrado"})
    }
});

app.listen(3000, () => {
    console.log("Express está escuchando en el puerto http://localhost:3000");
});
