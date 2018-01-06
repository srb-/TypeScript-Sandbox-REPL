

export class MyNode {
   
    value: number;
    next: MyNode;

    constructor(v: number, n: MyNode) { this.value = v; this.next = n; }
}


export class MyLinkedList {

    head: MyNode;

    constructor(arr: Array<number>) {

        let next: MyNode = null;

        // build linked list from back to front, so reverse
        for (let num of arr.reverse()) {
            let tempNode = new MyNode(num, next);
            next = tempNode;
        }

        this.head = next;
    }

    print() {

        let next: MyNode = this.head;
        let str = '';

        while (next) {
            str += next.value;
            next = next.next;
        }

        return str;
    }

    reverse() {

        let stack: Array<MyNode> = [];

        // iterate through, throwing on stack

        let next: MyNode = this.head;

        while (next) {
            stack.push(next);
            next = next.next;
        }

        let curNode = stack.pop();
        this.head = curNode;

        while (stack.length) {
            let nextNode = stack.pop()
            curNode.next = nextNode;
            curNode = nextNode;
        }

        curNode.next = null;

        return this; // return the object for chaining
    }

}
