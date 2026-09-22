//describe()-Test plan
//it()test()-test case
//expect()-assertion
//describe() - Test plan
// it() / test() - test case
//expect() - assertion
import { add } from "./calculator";
describe("Add feature of the calculator",()=>{
    test("Add 2 positive numbers",()=>{
        expect(add(5,10)).toBe(15);
        
       // expect(add(5, 10)).toEqual(15);
       //expect(add(5, 10)).toBeTruthy(10);
       //expect(add(5, 10)).toBeFalsy(20);
    });
    test("Add 2 negative numbers",()=>{
        expect(add(-5,-10)).toBe(-15);
    });
});