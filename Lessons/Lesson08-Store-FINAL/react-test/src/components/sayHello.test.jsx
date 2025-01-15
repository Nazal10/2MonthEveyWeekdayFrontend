import sayHello from "./sayHello";

test("are parameters correctly capitalized", () => {
    expect(sayHello("hello")).toBe("HELLO");
});
