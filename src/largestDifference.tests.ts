

import { expect } from 'chai';
import { findLargest } from './largestDifference';

describe('FindLargestDifference with smaller first', () => {
    let input1: Array<number> = [1, 100, 2, 105, -10, 30, 100];
    let input2: Array<number> = [1, 100, 2, 105, -10, 30, 80];


    it('findLargest() - input 1', () => {
        expect(findLargest(input1)).to.equal(110);
    })

    it('findLargest() - input 2', () => {
        expect(findLargest(input2)).to.equal(104);
    })

})