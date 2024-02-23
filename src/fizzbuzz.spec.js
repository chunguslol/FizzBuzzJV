import generarFizzbuzz from "./fizzbuzz.js";

describe("FizzBuzz", () => {
    it("Deberia generar el mismo numero para uno que no tiene regla para el 1", () => {

      expect(generarFizzbuzz(1)).toEqual("1");

    });
    
    it("Deberia generar el mismo numero para uno que no tiene regla para el 2", () => {
        expect(generarFizzbuzz(2)).toEqual("2");
      });
});