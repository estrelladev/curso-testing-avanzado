// prueba.test.js
const { sumar, restar } = require("../index");

// Grupo de pruebas para la función 'sumar'
describe("Pruebas para la función 'sumar'", () => {
  it("debería retornar 5 cuando se suman 2 + 3", () => {
    expect(sumar(2, 3)).toBe(5);
  });

  it("debería retornar -1 cuando se suman 2 + (-3)", () => {
    expect(sumar(2, -3)).toBe(-1);
  });

  it("debería retornar 0 cuando se suman 0 + 0", () => {
    expect(sumar(0, 0)).toBe(0);
  });
});

// Mock function para la función 'restar'
describe("Pruebas con mock function para 'restar'", () => {
  // Creamos un mock para la función 'restar'
  const mockRestar = jest.fn((a, b) => a - b);

  // Prueba que verifica el mock
  it("debería llamar a la función 'restar' con los argumentos correctos", () => {
    mockRestar(5, 3);
    expect(mockRestar).toHaveBeenCalledWith(5, 3); // Verificamos que se llamó con los argumentos correctos
  });

  // Prueba que verifica el valor retornado por el mock
  it("debería retornar 2 cuando se restan 5 - 3", () => {
    expect(mockRestar(5, 3)).toBe(2); // El mock retorna el valor esperado
  });

  // Verificar cuántas veces se llamó a la función mock
  it("debería haber sido llamada 2 veces", () => {
    expect(mockRestar).toHaveBeenCalledTimes(2); // Verificamos que se llamó dos veces
  });
});
