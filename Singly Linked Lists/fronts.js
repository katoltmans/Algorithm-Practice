class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    // Method to determine the length of a singly linked list - from Johnathan's 5/10/22 lecture
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
        return count;
    }

    // Optional method - from Zack's 4/11/22 lecture
    // length() {
    //     let runner = this.head;
    //     let count = 0;
    //     while (runner != null) {
    //         count++;
    //         runner = runner.next;
    //     }
    //     return count;
    // }

    // Method to add a node to the front of a singly linked list
    addFront(value) {
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        console.log(this.head);

        return this.head;
    }

    // Method to remove the head node
    removeFront() {
        this.head = this.head.next;
        console.log(this.head);

        return this.head;
    }

    // Method to return the value of the head of the list
    front() {
        if (this.head == null) {
            console.log(this.head);
            return null;
        }
        let dataValue = this.head.data;
        console.log(dataValue);
        return dataValue;
    }
}

let SLLTest = new SLL();

let node1 = new Node(4);
let node2 = new Node(5);
let node3 = new Node(6);

SLLTest.head = node1;

node1.next = node2;

node2.next = node3;

console.log("Length Method");
console.log(SLLTest);
console.log(SLLTest.length()); //way to get to node 3   SLL.head.next.next.next.data would return 6 (the data of node 3)
console.log();

console.log("Add Front");
SLL1 = new SLL();
SLL1.addFront(18); //Returns: Node { data: 18, next: null }
SLL1.addFront(5); //Returns: Node { data: 5, next: Node { data: 18, next: null } }
SLL1.addFront(73); //Returns: Node {data: 73, next: Node { data: 5, next: Node { data: 18, next: null } }}
console.log();

console.log("Remove Front");
SLL1.removeFront(); //Returns: Node { data: 5, next: Node { data: 18, next: null } }
SLL1.removeFront(); //Returns: Node { data: 18, next: null }
console.log();

console.log("Front");
SLL1.front(); //Returns: 18
SLL1.removeFront(); //Returns: null
SLL1.front(); //Returns: null
