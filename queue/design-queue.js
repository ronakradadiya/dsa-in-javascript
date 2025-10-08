class Queue {
  constructor() {
    this.items = [];
  }

  // Add element to the rear of the queue
  enqueue(element) {
    this.items.push(element);
  }

  // Remove element from the front of the queue
  dequeue() {
    if (this.isEmpty()) {
      return null; // or throw new Error("Queue is empty");
    }
    return this.items.shift();
  }

  // Get the front element without removing it
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[0];
  }

  // Check if queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Return the size of the queue
  size() {
    return this.items.length;
  }

  // Clear the queue
  clear() {
    this.items = [];
  }
}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.peek()); // 10
console.log(queue.dequeue()); // 10
console.log(queue.peek()); // 20
console.log(queue.size()); // 2
