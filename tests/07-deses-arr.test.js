import { retornaArreglo } from "../src/base-pruebas/07-deses-arr";

describe("Pruebas de 07-deses-arr", () => {
  test("Debe retornar arreglo de letras y números", () => {
    const [letters, numbers] = retornaArreglo();
    // console.log(letters);

    expect(numbers).toBe(123);

    expect(typeof letters).toBe("string");
    expect(typeof numbers).toBe("number");

    expect(letters).toEqual(expect.any(String));
  });
});
