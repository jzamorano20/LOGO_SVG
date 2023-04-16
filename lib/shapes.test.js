const { Triangle, Circle, Square } = require("./shapes");

describe("Triangle", () => {
    test("render method returns correct SVG string", () => {
        const triangle = new Triangle("red");
        expect(triangle.render()).toBe(
            '<polygon  points="100,25 175,175 25,175" style="fill:red\"/>'
        );
    });
});

describe("Circle", () => {
    test("render method returns correct SVG string", () => {
        const circle = new Circle("blue");
        expect(circle.render()).toBe(
            '<circle cx="100" cy="125" r="75" style="fill:blue"/>'
        );
    });
});

describe("Square", () => {
    test("render method returns correct SVG string", () => {
        const square = new Square("green");
        expect(square.render()).toBe(
            '<rect x="25" y="50"  width="150" height="150" style="fill:green"/>'
        );
    });
});