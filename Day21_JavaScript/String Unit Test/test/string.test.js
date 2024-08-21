import * as chai from 'chai';
const { expect } = chai;
import { stringtoUpperCase, stringLength, stringConcat, stringReverse } from '../src/string.js';

describe('Uppercase test 1:', () => {
    it("when i call stringtoUpperCase(\"hello\") return HELLO", () => {
        let result = stringtoUpperCase("hello");
        expect(result).to.equal("HELLO");
    })
});

describe('Uppercase test 2:', () => {
    it("when i call stringtoUpperCase(\"JavaScript\") return JAVASCRIPT", () => {
        let result = stringtoUpperCase("JavaScript");
        expect(result).to.equal("JAVASCRIPT");
    })
});

describe('String Length test 1:', () => {
    it("when i call stringLength(\"sutharsan\") return 9", () => {
        let result = stringLength("sutharsan");
        expect(result).to.equal(9);
    })
});

describe('String Length test 2:', () => {
    it("when i call stringLength(\"Tvsm362\") return 8", () => {
        let result = stringLength("Tvsm362");
        expect(result).to.equal(7);
    })
});

describe('String Concat test 1:', () => {
    it("when i call stringConcat(\"hello\", \"world\") return helloworld", () => {
        let result = stringConcat("hello", "world");
        expect(result).to.equal("helloworld");
    })
});

describe('String Concat test 2:', () => {
    it("when i call stringConcat(\"Indian \", \"Railways\") return Indian Railways", () => {
        let result = stringConcat("Indian ", "Railways");
        expect(result).to.equal("Indian Railways");
    })
});

describe('String Reverse test 1:', () => {
    it("when i call stringReverse(\"hello\") return olleh", () => {
        let result = stringReverse("hello");
        expect(result).to.equal("olleh");
    })
});

describe('String Reverse test 2:', () => {
    it("when i call stringReverse(\"malayalam\") return malayalam", () => {
        let result = stringReverse("malayalam");
        expect(result).to.equal("malayalam");
    })
});