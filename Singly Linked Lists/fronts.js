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
    addFront(value) {}

    // Method to return the value of the head of the list
}

let SLL1 = new SLL();

let node1 = new Node(4);
let node2 = new Node(5);
let node3 = new Node(6);

SLL1.head = node1;

node1.next = node2;

node2.next = node3;

console.log(SLL1);
console.log(SLL1.length()); //way to get to node 3   SLL.head.next.next.next.data would return 6 (the data of node 3)
