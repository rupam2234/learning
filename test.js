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
}

const list = new LinkedList();

list.append(10);
list.append(15);
list.append(20);

list.view();

list.delete(15);
list.view();
