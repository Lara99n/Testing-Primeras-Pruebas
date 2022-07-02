import { getImagen } from "../base-pruebas/11-async-await";

describe("Pruebas en 11-async-await", () => {
  test("Debe retornar un error", async () => {
    const url = await getImagen();

    expect(typeof url).toBe("string");
  });
});
