// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 2", () => {
    describe("Function - divide", () => {

        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(divide).toBeDefined();
        });
        it("should take two arguments", () => {
            expect(divide.length).toBe(2);
        });
        it("should return the division of the two numbers", () => {
            expect(divide(10, 5)).toEqual(2);
            expect(divide(30, 3)).toEqual(10);
            expect(divide(9, 9)).toEqual(1);
          });
          it("should return undefined if any of the arguments is not provided", () => {
            expect(divide(1)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
            expect(divide(undefined, 1)).toEqual(undefined);
          });
          it("The function should return undefined if any of the two arguments is not a number", () => {
            expect(add(2, '23')).toEqual(undefined);
            expect(add('23', 2)).toEqual(undefined);
          });

    })
})

