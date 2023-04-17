const {NotImplementedError} = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  getUnderlyingList() {
    let i = 0
    let next = this.queue?.[i+1];
    let prev = this.queue?.[i];
    const result = {};
    if (prev) {
      result.value = prev;
    }

    while (next) {
      prev.next = next
      next = this.queue?.[i+2];
      prev = this.queue?.[i+1];
    }
    return result;

  }

  enqueue(value) {
    if (this.queue) {
      const listNode = new ListNode(value)
      this.queue.push(listNode);
    } else {
      this.queue = [{value}];
    }
  }

  dequeue() {
    return this.queue.shift().value;
  }
}

module.exports = {
  Queue
};
