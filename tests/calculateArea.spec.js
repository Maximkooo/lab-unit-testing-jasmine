// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {

        // Each `it` block represents 1 test. You can use the following as a template:
        it("The function should be defined", () => {
            expect(calculateArea).toBeDefined();
        });
        it("The function should take two numbers as arguments", () => {
            expect(calculateArea.length).toBe(2);
        });
        it("The function should return a number representing the area of a rectangle (the product of the two arguments).",
            () => {
                expect(calculateArea(2, 2)).toBe(4);
                expect(calculateArea(3, 3)).toBe(9);
                expect(calculateArea(5, 5)).toBe(25);
            });
        it("In case any of the arguments is not provided, the function should return undefined.", () => { 
            expect(calculateArea(2)).toBe(undefined);
            expect(calculateArea(2, undefined)).toBe(undefined);
            expect(calculateArea()).toBe(undefined);

        });

    })
})

