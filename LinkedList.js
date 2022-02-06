class Node {
    constructor(value){              
        this.value = value,
        this.next = null       
    }
}

class LinkedList{
    
    //Creates a linkedlist with passed value.
    constructor(value){ 
        //Creates a head node      
        this.head = {
            value: value,
            next : null
        };
        //As there is only one element in the list, head is also a tail
        this.tail = this.head;
        //Length would be 1
        this.length = 1;
    }  

    //Add the node at the tail of the linkedlist
    append(value){
        //Create a new Node by creating a instance of a Node class
        const newNode = new Node(value);
        // Check if head is present or not, if head is empty creates a head
        if (this.head == null){
            this.head = node;
        } //Else creates a tail
        else{
        //We need to point current tail's next to the newNode
        this.tail.next = newNode;
        //Now make newNode a tail node
        this.tail = newNode;
        //Increase the length by 1
        this.length++;        
        }
        return this;
    }
    
    //Add the node as a head of the linkedlist
    prepend(value){
        //Create a new Node by creating a instance of a Node class
        const newNode = new Node(value);
        //Points this node's next to the head
        newNode.next = this.head;
        //Now make this node a head node
        this.head = newNode;
        //Increase the length by 1
        this.length++;
        return this;
    }

    //Insertes a node at specified index, say we want to insert 30 at index 2
    //Current list: 10 -> 20 -> 40 -> 50
    insert(index, value){
        //Create a new Node by creating a instance of a Node class
        const newNode = new Node(value);

        //Counter to loop
        let count = 1;

        //Create a temp node to traverse through list, point it to the head
        //Pointing to 10
        let previousNode = this.head;

        //Traverse the list one node before the specified index
        while(count < index){
            //Points temp node to its next node
            previousNode = previousNode.next;

            //Increase the count to compare it with index;
            count++;
        }
        //When the loop ends you will able have temp node pointing to the previous node of the index.

        //First, points new node's next to the current node's next, so it can hold the list ahead of its index
        //Current node = 20, New node = 30, So new node will be 30 -> 40 -> 50
        newNode.next = previousNode.next;
        
        //Now just point current node's next to new node.
        //Merge left side of the list, 10 -> 20 -> 30 -> 40 -> 50
        previousNode.next = newNode;
    }

    deleteHead(){
         this.head = this.head.next;
         this.length--;
    }

    deleteTail(){
        let secondLastNode = this.head;
        while(secondLastNode.next.next !== null){
            secondLastNode = secondLastNode.next;
        }
        secondLastNode.next = null;
        this.length--;
   }
  
   deleteAtIndex(index){
       if(index === 0){
        this.head = this.head.next;
        this.length--;
        return this;
       }
    let count = 1;
    let previousNode = this.head;
    while(count < index){
        previousNode = previousNode.next;
        count++;
    }
    previousNode.next = previousNode.next.next;
    this.length--;
    return this;
    }

    deleteNodeByValue(value){
        //Current node to loop through the list
        let currentNode = this.head;

        //Previous node to update its pointer to next.next node
        let previousNode = null;

        while(currentNode != null){
        
            //Check if we find the value we are looking for
            if(currentNode.value === value){

                //Check if it is a head or not by comparing previous node with null
                if (previousNode === null) {
                    //If it is head, then update head to nextnode
                    this.head = currentNode.next;
                }
                else{
                    //If it is not head then simply update previous node 
                    previousNode.next = currentNode.next;
                }
                //Reduce length by 1
                this.length--;
            }

            //Previous node will point to this node with every iteration
            previousNode = currentNode;
            //Current node will point to next node for iteration
            currentNode = currentNode.next;
        }               
    }

    searchElement(value){
        let currentNode = this.head;
        while(currentNode !== null){           
            if(currentNode.value === value) return true;       
            currentNode = currentNode.next;
        }
        return false;
    }

    printList(){
        //Creates an empty array.
        let printArrayList = [];
        //Pointer which points to the head node
        let currentNode = this.head;
        //Start iterating from the first node till you reach the last node
        while(currentNode !== null){
            //Add every node's value to the array
            printArrayList.push(currentNode.value);
            //Point pointer to the next node
            currentNode = currentNode.next;
        }
        //Return the array
        return printArrayList.join(' -> ');
    }

    reverseList(){
        if(!this.head || !this.head.next)
        {
            return this.head;
        }
        let previousNode = this.head;
        let currentNode = previousNode.next;        
        this.tail = this.head;
        while(currentNode){

            let nextNode = currentNode.next;
            currentNode.next = previousNode;
            previousNode = currentNode;
            currentNode = nextNode;

        }
        this.head.next = null;
        this.head = previousNode;
        return this;
    }
}
console.log('Creating a LinkList at constant time O(1): 20:');
const myLinkedList = new LinkedList(20);
console.log(myLinkedList.printList());
console.log('');

console.log('Appendding Node at constant time O(1): 40 -> 50:');
myLinkedList.append(40).append(50);
console.log(myLinkedList.printList());
console.log('');

console.log('Prepending Node at constant time O(1): 10:');
myLinkedList.prepend(10);
console.log(myLinkedList.printList());
console.log('');

console.log('Inserting Node at index 2 with time complexty of O(n): 30');
myLinkedList.insert(2,30);
console.log(myLinkedList.printList());
console.log('Inserting at index 1: 15');
myLinkedList.insert(1,15);
console.log(myLinkedList.printList());
console.log('');

console.log('Deleting Head-Node at constant time O(1): 10:');
myLinkedList.deleteHead();
console.log(myLinkedList.printList());
console.log('');

console.log('Deleting Tail-Node at O(n) time: 50:');
myLinkedList.deleteTail();
console.log(myLinkedList.printList());
console.log('');

console.log('Deleting Node at index 2 with time complexty of O(n): 30:');
myLinkedList.deleteAtIndex(2);
console.log(myLinkedList.printList());
console.log('');

console.log('Deleting Node with value 40 with time complexty of O(n):');
myLinkedList.deleteNodeByValue(40);
console.log(myLinkedList.printList());
console.log('');

console.log('Searching for value 20 with time complexty of O(n):');
console.log(myLinkedList.printList());
console.log(myLinkedList.searchElement(20));
console.log('Searching for value 50 with time complexty of O(n):');
console.log(myLinkedList.searchElement(50));


console.log('Reverse LinkedList O(n):');
console.log(myLinkedList.reverseList());
console.log(myLinkedList.printList());
console.log('');

const myLinkedList1 = new LinkedList(10);
myLinkedList1.append(20).append(30).append(40).append(50);

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
