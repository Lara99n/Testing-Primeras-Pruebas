import { getHeroeByIdAsync } from "../js-pruebas/09-promesas";

describe("Pruebas de promesas", () => {
  test("Debe de retornar un heroe", (done) => {
    const id = 1;

    getHeroeByIdAsync(id).then((hero) => {
      expect(hero).toEqual({
        id: 1,
        name: "Batman",
        owner: "DC",
      });
      done();
      //done es una forma que jest nos da para avisarle que el codigo se termino de ejecutar.
    });
  });

  test("Debe de obtener un error si heroe no existe", (done) => {
    const id = 100;

    getHeroeByIdAsync(id).catch((err) => {
      expect(err).toBe(`No se pudo encontrar el heroe ${id}`);
    });
    done();
  });
});
