const express = require("express");
const router = express.Router();
const fetchCharacters = require("../utils/fetchCharacters.js");

router.get("/", async (req, res) => {
    const data = await fetchCharacters();
    res.json(data);
});

router.get("/:name", async (req, res) => {
    const name = req.params.name;
    const data = await fetchCharacters(name);
    res.json(data);
});

module.exports = router;