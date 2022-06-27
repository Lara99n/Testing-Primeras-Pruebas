import { isTypedArray } from "util/types";
import { getHeroeById } from "../base-pruebas/08-imp-exp";

describe("pruebas en -8-imp-exp", () => {
  isTypedArray("getHeroesById debe de retornar un heroe por ID", () => {
    const id = 1;
    const hero = getHeroeById();
  });
});
