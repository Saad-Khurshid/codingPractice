/**
 Write a function that takes in the head of a Singly Linked List that contains
a loop (in other words, the list's tail node points to some node in the list
instead of None / null). The function should return
the node (the actual node--not just its value) from which the loop originates
in constant space.
Each LinkedList node has an integer value as well as
a next node pointing to the next node in the list.
Sample Input
head = 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 // the head node with value 0
                           ^         v
                           9 <- 8 <- 7

Sample Output
4 -> 5 -> 6 // the node with value 4
^         v
9 <- 8 <- 7

*/


class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// O(n) time | O(1) space
function findLoop(head) {
    let ptr = head.next
    let ptrDbl = head.next.next

    while (ptr !== ptrDbl) {
        ptr = ptr.next
        ptrDbl = ptrDbl.next.next
    }

    ptr = head
    while (ptr !== ptrDbl) {
        ptr = ptr.next
        ptrDbl = ptrDbl.next
    }

    return ptr
}
