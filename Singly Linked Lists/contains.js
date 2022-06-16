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
        console.log(this.head);

        return this.head;
    }

    // Method to find the sum of nodes in a singly linked list - FROM PLATFORM
    findSum() {
        //We first have to tell our train attendant that we want them to start at the front of the train
        let runner = this.head;
        let sum = 0;
        //Since a Linked List does not know how many nodes is within it, we will not be able to use a for loop to             iterate, instead we'll use a while
        //Also we need to tell them when to stop otherwise they will just run off the end of the train
        while (runner !== null) {
            //Since the runner is set to the current node, its value will be equal to the value of the node they                 are currently on
            sum += runner.data;
            //Tell our attendant to move to the next car
            runner = runner.next;
        }
        return sum;
    }

    // Method to check if a value is contained in a list
    contains(value) {
        let runner = this.head;
        let valueIsPresent = false;

        while (runner !== null) {
            if (runner.data == value) {
                valueIsPresent = true;
            }
            runner = runner.next;
        }
        if (valueIsPresent == true) {
            console.log("Value is present");
        } else {
            console.log("Value is NOT present");
        }
        console.log(valueIsPresent);
        return valueIsPresent;
    }
}

SLLNew = new LinkedList();
SLLNew.addFront(7);
SLLNew.addFront(17);
SLLNew.addFront(77);
SLLNew.addFront(111);

console.log(SLLNew.findSum());

SLLNew.contains(17);
SLLNew.contains(42);

SLLNew.findSum();
