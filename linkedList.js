import { Node } from './node.js';

export class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let node = new Node(val);
        if(!this.head){
            this.head = node;
            this.tail = node;
        }else {
            let temp = this.tail;
            this.tail = node;
            node.prev = temp;
            temp.next = node;
        }
        this.length++;
        return this;
    }

    pop(){
        if(!this.head)
         return undefined;
        let temp = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else {
            this.tail = temp.prev;
            this.tail.next = null;
            temp.prev = null;
        }
        this.length--;
        return this
    }

    unshift(val){
        if (val === undefined || val === null) {
            console.error("Please provide a valid value.");
            return this; 
        }
        let node = new Node(val);
        if(!this.head){
            this.head = node;
            this.tail = node;
        }else{
            let temp = this.head;
            this.head = node;
            node.next = temp;
            temp.prev = node;   
        }
        this.length++;
        return this;
    }

    shift(){
        if(!this.head){
            console.error("The list is empty.");
            return undefined;
        }
        let temp = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = temp.next;
            this.head.prev = null;
            temp.next = null;
        }
        this.length--;
        return this;
    }

    set(index, val) {
        if (index < 0 || index >= this.length) {
            console.error("Index out of bounds.");
            return undefined;
        }
    
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
    
        current.val = val;
        return this;
    }

    insert(index, val) {
        if (index < 0 || index > this.length) {
            console.error("Index out of bounds.");
            return false; 
        }

        let node = new Node(val);

        if (index === 0) {
            this.unshift(val);
            return true;
        }

        if (index === this.length) {
            this.push(val);
            return true;
        }


        let current = this.head;
        let counter = 0;

        while(counter !== index){
            current = current.next;
            counter++;
        }

        let temp = current;
        let prev = temp.prev;
        current.prev = node
        prev.next = node;
        node.next = temp;
        node.prev = prev;
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            console.error("Index out of bounds.");
            return undefined; 
        }

        if (index === 0) {
            this.shift(val);
            return true;
        }

        if(index === this.length -1){
            this.pop();
            return true; 
        } 

        let current = this.head;
        let counter = 0;

        while(counter !== index){
            current = current.next;
            counter++;
        }

        let prev = current.prev;
        let next = current.next;
        prev.next = next;
        next.prev = prev;
        this.length--;
        return true;
    }
}


