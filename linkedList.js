class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }

  view() {
    if (this.head === null) {
      console.log(`List is empty`);
      return;
    }

    let current = this.head;

    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  delete(value) {
    if (this.head === null) return;

    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;

    while (current.next && current.next.value !== value) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next; //skip
    }
  }

  // insert at first
  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;
  }

  // find if a value exists
  find(value) {
    let current = this.head;

    while (current) {
      if (current.value === value) {
        console.log(`Value found: ${value}`);
        return;
      }
      current = current.next;
    }

    console.log(`${value} not found`);
  }

  // insert at perticular index
  insertAt(value, index) {
    const newNode = new Node(value);

    if (index < 0) {
      return;
    }

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;
    let i = 0;

    while (current && i < index - 1) {
      current = current.next;
      i++;
    }

    newNode.next = current.next;
    current.next = newNode;
  }

  // calculate size
  getSize() {
    if (this.head === null) {
      return 0;
    }

    let current = this.head;
    let length = 0;

    while (current) {
      current = current.next;
      length++;
    }

    return length;
  }

  // deleteAt index
  deleteAtIndex(index) {
    if (index < 0) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    let i = 0;

    while (current !== null && i < index - 1) {
      current = current.next;
      i++;
    }

    if (current === null || current.next === null) return;

    current.next = current.next.next;
  }

  // find middle point
  getMiddle() {
    let current = this.head;

    let slow = current;
    let fast = current;

    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }

    return `Middle: ${slow.value}`;
  }

  // get the n-th element from the node
  getElement(index) {
    if (index < 0) {
      return;
    }

    if (index === 0) {
      return this.head !== null ? this.head.value : null;
    }

    let current = this.head;
    let i = 0;

    while (current !== null && i < index - 1) {
      current = current.next;
      i++;
    }

    if (current === null || current.next === null) return null;

    return current.next.value;
  }

  // detect cycle (use Floyed Cycle Detection)
  hasCycle() {
    if (this.head === null) {
      return false;
    }

    let slow = this.head;
    let fast = this.head;

    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;

      if (slow === fast) {
        return true;
      }
    }

    return false;
  }
}

const list = new LinkedList();

list.append(10);
list.append(15);
list.append(20);

// list.view();
list.delete(15);

list.prepend(9);
// list.view();

// list.find(9);
list.insertAt(40, 1);
list.insertAt(35, 1);

list.deleteAtIndex(2);
// list.view();
// list.getMiddle();

// console.log(list.getSize());
// console.log(list.getMiddle());
// console.log(list.getElement(3));
console.log(list.hasCycle());
