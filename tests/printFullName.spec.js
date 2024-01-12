// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 4", () => {
    describe("Function - printFullName", () => {

        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(printFullName).toBeDefined();
        });
        it("should take one arguments", () => {
            expect(printFullName.length).toBe(1);
        });
        it("The function should return undefined if any of the two arguments is not a number", () => {
            expect(printFullName(2)).toEqual(undefined);
            expect(printFullName('23')).toEqual(undefined);
            expect(printFullName([2])).toEqual(undefined);
        });
        it("The function should return a string with the first name and the last name separated by a space", () => {
            expect(printFullName({ firstName: 'Maksym', lastName: 'Synytskyi' })).toEqual('Maksym Synytskyi');
            expect(printFullName({ firstName: 'Jack', lastName: 'Kolin' })).toEqual('Jack Kolin');
            expect(printFullName({ firstName: 'Alex', lastName: 'Frank' })).toEqual('Alex Frank');
        });
        it("In case the firstName or lastName properties are not provided, the function should return undefined.", () => {
            expect(printFullName({ firstName: 'Maksym' })).toEqual(undefined);
            expect(printFullName({ lastName: 'Kolin' })).toEqual(undefined);
            expect(printFullName({})).toEqual(undefined);
        });

    })
})

