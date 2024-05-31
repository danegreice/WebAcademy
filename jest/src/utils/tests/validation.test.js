const {firstName, verifyStockAvailability, calculateTotalPrice} = require("../validations");

describe("firstName()", ()=> {
    it("deve retornar somente o primeiro nome", () => {
        const fullName = "Daniele Greice";
        const result = firstName(fullName);
        expect(result).toBe("Daniele");
    })
    it("deve retornar o primeiro nome quando não tiver espaços", () => {
        const name = "Bernardo";
        const result = firstName(name);
        expect(result).toBe("Bernardo");
    })
    it("deve retornar somente o primeiro nome quando houver espaços no início", () => {
        const name = " Bernardo Albuquerque";
        const result = firstName(name);
        expect(result).toBe("Bernardo");
    })
    it("deve retornar somente o primeiro nome quando houver espaços no final", () => {
        const name = "Bernardo Albuquerque ";
        const result = firstName(name);
        expect(result).toBe("Bernardo");
    })
})

describe("verifyStockAvailability()", () => {

})

describe("calculateTotalPrice", () => {

})