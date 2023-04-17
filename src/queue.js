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
    return this.list;

  }

  enqueue(value) {
    if (this.queue) {
      const listNode = new ListNode(value)
      this.queue.push(listNode);
      this.prev.next = listNode;
      this.prev = listNode;

    } else {
      const listNode = new ListNode(value)
      this.prev = listNode;
      this.queue = [listNode];
    }
  }

  dequeue() {
    return this.queue.shift().value;
  }
}

module.exports = {
  Queue
};
