import * as chai from 'chai';
const { expect } = chai;
import { add, sub } from '../src/calculation.js';

describe('add test', () => {
    it("when i call add(3, 3) return 6", () => {
        let result = add(3, 3);
        expect(result).to.equal(6);
    })
})

describe('sub test', () => {
    it("when i call sub(3, 2) return 1", () => {
        let result = sub(3, 2);
        expect(result).to.equal(1);
    })
})