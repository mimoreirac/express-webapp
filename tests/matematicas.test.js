import {  describe, it, expect  }  from "vitest";
import { sumar, restar } from "../utils/matematicas"

describe("Funciones matematicas", () => {
    it("debe sumar correctamente", () => {
        expect(sumar(6,3)).toBe(9);
    })
    it("debe restar correctamente" , () => {
        expect(restar(8,5)).toBe(3);
    })
})
