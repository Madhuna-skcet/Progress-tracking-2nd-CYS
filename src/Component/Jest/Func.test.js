import { add, subtract } from './Func';
test('adds two numbers', () => {
expect(add(1, 2)).toBe(3);
expect(add(-1, 1)).toBe(0);
expect(add(6,2)).toBe(8);
});
test('subtracts two numbers', () => {
expect(subtract(3, 2)).toBe(1);
expect(subtract(-1, 1)).toBe(-2);
 expect(subtract(5,0)).toBe (5);

});