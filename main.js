import { LinkedList } from './linkedList.js';

// Test cases
const testLinkedList = new LinkedList();

testLinkedList.push(1);
console.log(testLinkedList); 

testLinkedList.pop();
console.log(testLinkedList); 

testLinkedList.unshift(2);
console.log(testLinkedList); 

testLinkedList.shift();
console.log(testLinkedList); 

testLinkedList.push(1).push(2).push(3);
testLinkedList.set(1, 10);
console.log(testLinkedList); 

testLinkedList.insert(1, 5);
console.log(testLinkedList); 

testLinkedList.remove(2);
console.log(testLinkedList); 