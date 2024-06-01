const {
  firstName,
  verifyStockAvailability,
  calculateTotalPrice,
} = require("../validations");

describe("firstName()", () => {
  it("deve retornar somente o primeiro nome", () => {
    const fullName = "Daniele Greice";
    const result = firstName(fullName);
    expect(result).toBe("Daniele");
  });
  it("deve retornar o primeiro nome quando não tiver espaços", () => {
    const name = "Bernardo";
    const result = firstName(name);
    expect(result).toBe("Bernardo");
  });
  it("deve retornar somente o primeiro nome quando houver espaços no início", () => {
    const name = " Bernardo Albuquerque";
    const result = firstName(name);
    expect(result).toBe("Bernardo");
  });
  it("deve retornar somente o primeiro nome quando houver espaços no final", () => {
    const name = "Bernardo Albuquerque ";
    const result = firstName(name);
    expect(result).toBe("Bernardo");
  });
});

describe("verifyStockAvailability()", () => {
  it("deve retornar true se tiver a quantidade do produto disponivel", () => {
    const result = verifyStockAvailability("tablet", 10);
    expect(result).toBeTruthy();
  });
  it("deve retornar false se não tiver a quantidade do produto disponivel", () => {
    const result = verifyStockAvailability("laptop", 11);
    expect(result).toBeFalsy();
  });
  it("deve retornar false se for passada uma quantidade negativa", () => {
    const result = verifyStockAvailability("headphone", -2);
    expect(result).toBeFalsy();
  });
  it("deve retornar false se for passada um produto inexistente", () => {
    const result = verifyStockAvailability("tv", 10);
    expect(result).toBeFalsy();
  });
});

describe("calculateTotalPrice", () => {
  it("deve retornar o valor total dos produtos", () => {
    const produtos = [
      { name: "Product 1", price: 10, quantity: 2 },
      { name: "Product 2", price: 15, quantity: 2 },
      { name: "Product 3", price: 20, quantity: 1 },
    ];
    const result = calculateTotalPrice(produtos);
    expect(result).toEqual(70);
  });
  it("deve retornar 0 se as quantidades estiverem zeradas", () => {
    const produtos = [
      { name: "Product 1", price: 10, quantity: 0 },
      { name: "Product 2", price: 15, quantity: 0 },
      { name: "Product 3", price: 20, quantity: 0 },
    ];
    const result = calculateTotalPrice(produtos);
    expect(result).toEqual(0);
  });
  it("deve retornar -1 se tiver quantidades negativas", () => {
    const produtos = [
      { name: "Product 1", price: 10, quantity: -2 },
      { name: "Product 2", price: 15, quantity: 0 },
      { name: "Product 3", price: 20, quantity: -1 },
    ];
    const result = calculateTotalPrice(produtos);
    expect(result).toEqual(-1);
  });
  it("deve retornar -1 se tiver preços negativos", () => {
    const produtos = [
      { name: "Product 1", price: 10, quantity: 2 },
      { name: "Product 2", price: -15, quantity: 0 },
      { name: "Product 3", price: -20, quantity: 1 },
    ];
    const result = calculateTotalPrice(produtos);
    expect(result).toEqual(-1);
  });
});
