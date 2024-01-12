// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 5", () => {
    describe("Function - sumArrayNumbers", () => {

        // Each `it` block represents 1 test. You can use the following as a template:
        it("The function should be defined.", () => {
            expect(sumArrayNumbers).toBeDefined()
        });
        it("The function should take one argument of type array. ", () => {
            expect(sumArrayNumbers.length).toBe(1)
        });
        it("The function should return the sum of all numbers in the array", () => {
            expect(sumArrayNumbers([1, 2, 3])).toBe(6)
            expect(sumArrayNumbers([5, 9])).toBe(14)
            expect(sumArrayNumbers([12, 10, 12])).toBe(34)
        });
        it("In case the argument passed is not an array, the function should return undefined.", () => {
            expect(sumArrayNumbers('')).toBe(undefined)
            expect(sumArrayNumbers(1)).toBe(undefined)
            expect(sumArrayNumbers(true)).toBe(undefined)
        });
        it("In case the argument passed is an empty array, the function should return 0.", () => {
            expect(sumArrayNumbers([])).toBe(0)
        });

    })
})

