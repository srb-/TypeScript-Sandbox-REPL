

import { expect } from 'chai';
import { MyNode, MyLinkedList } from './reverseLinkedList';

describe('ReverseLinkedList', () => {
    let ll: MyLinkedList;

    beforeEach(() => {
        ll = new MyLinkedList([1,2,3,4,5,6]);
    });

    it('revers() can be reversed reversed', () => {
        expect(ll.reverse().print()).to.equal('654321');
    })

    it('constructor() takes an array and can print it as a LL', () => {
        expect(ll.print()).to.equal('123456');
    })

})