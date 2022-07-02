import heroes from "./heroes";

// console.log( owners );

export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);

// find?, filter
export const getHeroesByOwner = (owner) =>
  heroes.filter((heroe) => heroe.owner === owner);
