const lib = require("../exercise1");

describe('fizzBuzz', () => {

    it('should throw if input is not a number', () => {
        const args = ['1', null, undefined, { }];
        args.forEach(a => {
            expect(() => lib.fizzBuzz(a)).toThrow();
        });
    });

    it('should return FizzBuzz if input is divisible by both 3 and 5', () => {
        expect(lib.fizzBuzz(15)).toBe('FizzBuzz');
    });

    it('should return Fizz if input is only divisible by 3', () => {
        expect(lib.fizzBuzz(3)).toBe('Fizz');
    });

    it('should return Buzz if input is only divisible by 5', () => {
        expect(lib.fizzBuzz(5)).toBe('Buzz');
    });

    it('should return input if it is not divisible by either 5 or 3', () => {
        expect(lib.fizzBuzz(1)).toBe(1);
    });
});
