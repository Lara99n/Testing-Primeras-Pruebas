import { retornaArreglo } from "../js-pruebas/07-deses-arr";

describe("Pruebas en 07-deses-arr", () => {
  test("debe retornar un string y un numero", () => {});

  const [letters, numbers] = retornaArreglo();

  //Este va a esperar el valor preciso, ABC
  expect(letters).toBe("ABC");
  expect(numbers).toBe(123);

  //Si yo necesito validarlo pero sin que sea un DATO EXPECIFICO, LAS MEJORES OPCIONES VAN A SER ESTAS 2
  expect(typeof letters).toBe("string");
  expect(typeof numbers).toBe("number");

  //o

  expect(letters).toEqual(expect.any(String));
  expect(numbers).toEqual(expect.any(Number));
});
