class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }

    // Method to add a node to the front of a singly linked list
    addFront(value) {
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;

        return this.head;
    }

    //Method to find the length of a singly linked list
    length() {
        let runner = this.head;
        if (this.head == 0) {
            return 0;
        }
        let count = 1;
        while (runner.next) {
            count++;
            runner = runner.next;
        }
        console.log(count);
        return count;
    }
}

SLLNew = new LinkedList();

SLLNew.addFront(7);
SLLNew.addFront(17);
SLLNew.addFront(77);
SLLNew.addFront(111);

console.log("Length");
SLLNew.length();
