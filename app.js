const express = require("express");
const app = express();
const Pokemon = require("./models/Pokemon");
const Trainer = require("./models/Trainer");
const db = require("./db");

(async () => {
  try {
    await db.sync({ force: true }); // The 'force: true' option will drop the table if it already exists.
    console.log('Table created and synced with the database.');
  } catch (error) {
    console.error('Error syncing the table:', error);
  }
})();


app.get("/", (req, res) => res.send("Welcome to the Pokedex"));

app.get("/pokemon", async (req, res) => {
  const pokemon = await Pokemon.findAll();
  res.json(pokemon);
});

app.get("/pokemon/:id", async (req, res) => {
  const pokemon = await Pokemon.findByPk(req.params.id);
  if (pokemon) {
    res.json(pokemon);
  } else {
    res.status(404).send("Pokemon not found");
  }
});

app.get("/trainer", async (req, res) => {
  const trainer = await Trainer.findAll();
  res.json(trainer);
});

app.get("/trainer/:id", async (req, res) => {
  const trainer = await Trainer.findByPk(req.params.id);
  if (trainer) {
    res.json(trainer);
  }
  else{
    res.status(404).send("Trainer doesnt exist");
  }
});

app.post("/pokemon", async (req, res) => {
  const newPokemon = await Pokemon.create(req.body);
  res.json(newPokemon);
});

app.post("/trainer", async (req, res) => {
  const newTrainer = await Trainer.create({ name: "Shawn Sinanan"});
  res.json(newTrainer);
});

app.put("/pokemon/:id", async (req, res) => {
  const pokemon = await Pokemon.findByPk(req.params.id);
  if (pokemon) {
    await pokemon.update({ name: "PARKACHU"});
    res.json(pokemon);
  } else {
    res.status(404).send("Pokemon not found");
  }
});

app.put("/trainer/:id", async (req, res) => {
  const trainer = await Trainer.findByPk(req.params.id);
  if (trainer) {
    await trainer.update({ name: "shawn"});
    res.json(trainer);
  } else {
    res.status(404).send("Trainer doesnt exist");
  }
});

app.delete("/pokemon/:id", async (req, res) => {
  const pokemon = await Pokemon.findByPk(req.params.id);
  if (pokemon) {
    await pokemon.destroy();
    res.status(204).send();
  } else {
    res.status(404).send("Pokemon not found");
  }
});

app.delete("/trainer/:id", async (req, res) => {
  const trainer = await Trainer.findByPk(req.params.id);
  if (trainer) {
    await trainer.destroy();
    res.status(204).send();
  } else {
    res.status(404).send("Trainer doesnt exist");
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
