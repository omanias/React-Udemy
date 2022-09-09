import { getUser, getUsuarioActivo } from "../src/base-pruebas/05-funciones";

describe("Prueba de funciones", () => {
  test("getUser debe retornar un objeto", () => {
    const testUser = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();

    expect(testUser).toStrictEqual(user);
  });

  test("getUsuarioActivo debe retornar un objeto", () => {
    const name = "Fernando";

    const user = getUsuarioActivo(name);

    expect(user).toStrictEqual({
      uid: "ABC567",
      username: name,
    });
  });
});
