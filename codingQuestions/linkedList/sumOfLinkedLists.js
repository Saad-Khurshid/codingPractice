/**
You're given two Linked Lists of potentially unequal length. Each Linked List
represents a non-negative integer, where each node in the Linked List is a
digit of that integer, and the first node in each Linked List always
represents the least significant digit of the integer. Write a function that
returns the head of a new Linked List that represents the sum of the integers
represented by the two input Linked Lists.

Each LinkedList node has an integer value as well as
a next node pointing to the next node in the list or to
None / null if it's the tail of the list. The
value of each LinkedList node is always in the range
of 0 - 9.

Note: your function must create and return a new Linked List, and you're not
allowed to modify either of the input Linked Lists.

Sample Input
linkedListOne = 2 -> 4 -> 7 -> 1
linkedListTwo = 9 -> 4 -> 5

Sample Output
1 -> 9 -> 2 -> 2
// linkedListOne represents 1742
// linkedListTwo represents 549
// 1742 + 549 = 2291
*/

// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// O(max(n,m)) time | O(max(n,m)) space
function sumOfLinkedLists(linkedListOne, linkedListTwo) {
    let listOne = linkedListOne
    let listTwo = linkedListTwo

    let carry = 0

    let newLinkedList = new LinkedList(0)
    let currentNode = newLinkedList

    while (listOne !== null || listTwo !== null || carry !== 0) {

        let digitOne = listOne?.value ?? 0
        let digitTwo = listTwo?.value ?? 0
        let sum = digitOne + digitTwo + carry
        carry = Math.floor(sum / 10)
        sum = sum % 10

        let newNode = new LinkedList(sum)
        currentNode.next = newNode
        currentNode = newNode

        listOne = listOne?.next ?? null
        listTwo = listTwo?.next ?? null


    }

    return newLinkedList.next;
}
