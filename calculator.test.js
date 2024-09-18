import { add, subtract, multiply, divide } from "./calculator"

test("add", ()=>{
    expect(add(1, 2)).toBe(3)
})

test("subtract", ()=>{
    expect(subtract(1, 1)).toBe(0)
})

test("multiply", ()=>{
    expect(multiply(2, 2)).toBe(4)
})

test("divide", ()=>{
    expect(divide(2,2)).toBe(1)
})