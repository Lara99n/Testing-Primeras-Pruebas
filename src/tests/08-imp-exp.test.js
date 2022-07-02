import { getHeroeById, getHeroesByOwner } from "../js-pruebas/08-imp-exp";

describe("pruebas en -8-imp-exp", () => {
  test("getHeroesById debe de retornar un heroe por ID", () => {
    const id = 1;
    const hero = getHeroeById(id);

    expect(hero).toEqual({ id: 1, name: "Batman", owner: "DC" });
    //toEqual -> se usa para evaluar objetos
  });

  //Las pruebas idealmente tiene que ser independientes
  test("getHeroesById debe de retornar undefined si no existe un ID", () => {
    const id = 100;
    const hero = getHeroeById(id);

    expect(hero).toBeFalsy();
    //toBeFalsy -> evalua si es null, undefined, false
  });
});

test("Debe retornar un arreglo con los heroes de DC", () => {
  const owner = "DC";

  const heroesDc = getHeroesByOwner(owner);

  expect(heroesDc.length).toEqual(3);

  //O
  expect(heroesDc).toEqual([
    {
      id: 1,
      name: "Batman",
      owner: "DC",
    },
    {
      id: 3,
      name: "Superman",
      owner: "DC",
    },
    {
      id: 4,
      name: "Flash",
      owner: "DC",
    },
  ]);

  //O
  expect(heroesDc).toEqual(heroesDc.filter((heroe) => heroe.owner === owner));
});

test("Debe retornar un arreglo con los heroes de Marvel", () => {
  const owner = "Marvel";

  const heroesMarvel = getHeroesByOwner(owner);

  expect(heroesMarvel).toEqual([
    {
      id: 2,
      name: "Spiderman",
      owner: "Marvel",
    },
    {
      id: 5,
      name: "Wolverine",
      owner: "Marvel",
    },
  ]);
});
