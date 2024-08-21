// test/app.test.js

import * as chai from 'chai';
const { expect } = chai;
import { Cube } from '../src/app.js';

describe('Testing the Cube Functions', function() {
    it('1. The side length of the Cube', function() {
        let c1 = new Cube(2);
        expect(c1.getSideLength()).to.equal(2);
    });

    it('2. The surface area of the Cube', function() {
        let c2 = new Cube(5);
        expect(c2.getSurfaceArea()).to.equal(150); // Note: The correct surface area for side length 5 is 150.
    });

    it('3. The volume of the Cube', function() {
        let c3 = new Cube(7);
        expect(c3.getVolume()).to.equal(343);
    });
});
