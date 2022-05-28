/**
Write a DoublyLinkedList class that has a head and a
tail, both of which point to either a linked list
Node or None / null. The class should support:

Setting the head and tail of the linked list.
  
Inserting nodes before and after other nodes as well as at given positions
(the position of the head node is 1).
  
Removing given nodes and removing nodes with given values.
Searching for nodes with given values.


Note that the setHead, setTail,
insertBefore, insertAfter,
insertAtPosition, and remove methods all take in
actual Nodes as input parameters—not integers (except for
insertAtPosition, which also takes in an integer representing the
position); this means that you don't need to create any new Nodes
in these methods. The input nodes can be either stand-alone nodes or nodes
that are already in the linked list. If they're nodes that are already in the
linked list, the methods will effectively be moving the nodes within
the linked list. You won't be told if the input nodes are already in the
linked list, so your code will have to defensively handle this scenario.

If you're doing this problem in an untyped language like Python or JavaScript,
you may want to look at the various function signatures in a typed language
like Java or TypeScript to get a better idea of what each input parameter is.

Each Node has an integer value as well as a
prev node and a next node, both of which can point
to either another node or None / null.

Sample Usage
// Assume the following linked list has already been created:
1 -> 2 -> 3 -> 4 -> 5
// Assume that we also have the following stand-alone nodes:
3, 3, 6
setHead(4): 4 -> 1 -> 2 -> 3 -> 5 // set the existing node with value 4 as the head
setTail(6): 4 -> 1 -> 2 -> 3 -> 5 -> 6 // set the stand-alone node with value 6 as the tail
insertBefore(6, 3): 4 -> 1 -> 2 -> 5 -> 3 -> 6 // move the existing node with value 3 before the existing node with value 6
insertAfter(6, 3): 4 -> 1 -> 2 -> 5 -> 3 -> 6 -> 3 // insert a stand-alone node with value 3 after the existing node with value 6
insertAtPosition(1, 3): 3 -> 4 -> 1 -> 2 -> 5 -> 3 -> 6 -> 3 // insert a stand-alone node with value 3 in position 1
removeNodesWithValue(3): 4 -> 1 -> 2 -> 5 -> 6 // remove all nodes with value 3
remove(2): 4 -> 1 -> 5 -> 6 // remove the existing node with value 2
containsNodeWithValue(5): true
*/

// This is an input class. Do not edit.
class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

// Feel free to add new properties and methods to the class.
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // O(1) space time
    setHead(node) {
        if (this.head === null) {
            this.head = node
            this.tail = node
            return
        }
        this.insertBefore(this.head, node)
    }

    // O(1) space time
    setTail(node) {
        if (this.tail === null) {
            this.setHead(node)
            return
        }
        this.insertAfter(this.tail, node)
    }

    // O(1) space time
    insertBefore(node, nodeToInsert) {
        if (nodeToInsert === this.head && nodeToInsert === this.tail) return

        this.remove(nodeToInsert)

        nodeToInsert.prev = node.prev
        nodeToInsert.next = node
        if (node.prev === null) this.head = nodeToInsert
        else node.prev.next = nodeToInsert
        node.prev = nodeToInsert

    }

    // O(1) space time
    insertAfter(node, nodeToInsert) {
        if (nodeToInsert === this.head && nodeToInsert === this.tail) return

        this.remove(nodeToInsert)

        nodeToInsert.prev = node
        nodeToInsert.next = node.next
        if (node.next === null) this.tail = nodeToInsert
        else node.next.prev = nodeToInsert
        node.next = nodeToInsert
    }

    // O(p) time | O(1) space
    insertAtPosition(position, nodeToInsert) {
        if (position === 1) {
            this.setHead(nodeToInsert)
            return
        }

        let ptr = this.head
        let currentPosition = 1

        while (ptr !== null && currentPosition++ !== position) ptr = ptr.next

        if (ptr === null) this.setTail(nodeToInsert)
        else this.insertBefore(ptr, nodeToInsert)
    }

    // O(n) time | O(1) space 
    removeNodesWithValue(value) {
        let node = this.head
        while (node !== null) {
            const nodeToRemove = node
            node = node.next
            if (nodeToRemove.value === value) {
                this.remove(nodeToRemove)
            }
        }
    }

    // O(n) time | O(1) space
    remove(node) {
        if (node === this.head) this.head = this.head.next
        if (node === this.tail) this.tail = this.tail.prev
        this.removeBindings(node)
    }

    // O(n) time | O(1) space
    containsNodeWithValue(value) {
        let node = this.head
        while (node !== null && node.value !== value) node = node.next
        return node !== null
    }

    removeBindings(node) {
        if (node.prev !== null) node.prev.next = node.next
        if (node.next !== null) node.next.prev = node.prev
        node.prev = null
        node.next = null
    }
}  