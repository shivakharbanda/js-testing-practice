import { capitalize, reverseString } from "./stringFunctions.js";

test('captalise test', () => {
    expect(capitalize("hello")).toBe("Hello");
});

test('reverse test', () => {
    expect(reverseString("hello")).toBe("olleh");
});