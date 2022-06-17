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

    // Method to display the nodes in a singly linked list
    display() {
        let dataDisplay = " ";
        let runner = this.head;
        while (runner != null) {
            dataDisplay = dataDisplay + ", " + runner.data;
            runner = runner.next;
        }
        console.log(dataDisplay);
        return dataDisplay;
    }
}

SLLNew = new LinkedList();

SLLNew.addFront(76);
SLLNew.addFront(2);
console.log();

SLLNew.display();
console.log();
SLLNew.addFront(11.41);
console.log();

SLLNew.display();
