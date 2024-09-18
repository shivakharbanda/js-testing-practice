import { caesarCipher } from "./cipher"

test("Happy path test", ()=>{
    expect(caesarCipher('xyz', 3)).toBe("abc")
})

test("Case sensitive", ()=>{
    expect(caesarCipher('HeLLo', 3)).toBe("KhOOr")
})

test("Non Alphaneumeric test", ()=>{
    expect(caesarCipher('Hello, World!', 3)).toBe("Khoor, Zruog!")
})