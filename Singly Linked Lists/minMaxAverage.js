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

    // Method to locate the max value in a singly linked list
    max() {
        let temp = 0;
        let runner = this.head;
        while (runner !== null) {
            if (runner.data > temp) {
                temp = runner.data;
            }
            runner = runner.next;
        }
        console.log(temp);
        return temp;
    }

    // Method to locate the min value in a singly linked list
    min() {
        let temp = this.head.data;
        let runner = this.head;
        while (runner !== null) {
            if (runner.data < temp) {
                temp = runner.data;
            }
            runner = runner.next;
        }
        console.log(temp);
        return temp;
    }

    // Method to calculate the average of all values in a singly linked list
    average() {
        let runner = this.head;
        let sum = 0;
        let count = 0;
        while (runner !== null) {
            sum += runner.data;
            count++;
            runner = runner.next;
        }
        let average = sum / count;
        console.log(average);
        return average;
    }
}

SLLNew = new LinkedList();

SLLNew.addFront(48.5);
SLLNew.addFront(21);
SLLNew.addFront(1000);
SLLNew.addFront(-7);
SLLNew.addFront(-14);
console.log();

console.log("Max value");
SLLNew.max();
console.log();

console.log("Min value");
SLLNew.min();
console.log();

console.log("Average");
SLLNew.average();
console.log();
