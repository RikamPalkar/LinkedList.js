
function reverseLinkedList(linkedlist) {
    if(!linkedlist){
        return linkedlist;
    }
    var currentNode = linkedlist.head;
    var previousNode = null;
    var nextNode = null;
    while(currentNode != null) {
        /* 
            This node will keep the track of third node.
            Once we reverse the pointer of second element which is 20 in iteration 1, 10 <- 20,
            We might lose third element to continue iteration, so keeping a track of next element.
        */ 
        nextNode = currentNode.next;

        // We need reverse a pointer to point to the previous node. 10 <- 20
        currentNode.next = previousNode;

        /* 
            Now we need to move to next 2 elements for comparision.
            So increment previousNode to current node: 
            previousNode = 20      
        */
            previousNode = currentNode;
        
        /*
            Point current node to its next node,
            currentNode = 30.
        */
        currentNode = nextNode;
    }
    return previousNode; 
} 

console.log('Creating a new LinkList at constant time O(1):');
const myLinkedListTwo = new LinkedList(1);
console.log(myLinkedListTwo.printList());
console.log('');

console.log('Appending Node at constant time O(1):');
myLinkedListTwo.append(2).append(3).append(4).append(5);
console.log(myLinkedListTwo.printList());
console.log('');
console.log('Reversing a linkedlist:');
console.log(reverseLinkedList(myLinkedListTwo));
