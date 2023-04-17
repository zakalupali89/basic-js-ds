const {NotImplementedError} = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {

  root() {
    return this?.rootNode || null;
  }

  add(data) {
    if (this.root() === null) {
      this.rootNode = {data};
      this.current = this.rootNode;
      return;
    }

    if (this.current.data < data) {
      if (this.current.right) {
        this.current = this.current.right;
        this.add(data);
      } else {
        this.current.right = {data};
        this.current.right.parent = {...this.current};
        this.current = this.root();
      }
    } else {
      if (this.current.left) {
        this.current = this.current.left;
        this.add(data);
      } else {
        this.current.left = {data};
        this.current.left.parent = {...this.current};
        this.current = this.root();
      }
    }
  }

  has(data) {
    if (this.find(data) === null) {
      return false;
    } else {
      return true;
    }
  }

  find(data) {

    if (this.current === undefined) {
      return null;
    }

    if (this.current.data === data) {
      const result = {...this.current};
      this.current = this.root();
      return result;
    }

    if (this.current.data < data) {
      if (this.current.right) {
        this.current = this.current.right;
        return this.find(data);
      } else {
        return null;
      }
    }

    if (this.current.data > data) {
      if (this.current.left) {
        this.current = this.current.left;
        return this.find(data);
      } else {
        return null;
      }
    }
  }

  remove(data) {
    let deleteNode = this.find(data);
    if (deleteNode.left) {
      let current = deleteNode.left;

      if (current.right) {
        while (current.right) {
          current = current.right;
        }
        current.parent.right = null;
      }
      deleteNode.data = current.data;

    } else {
      if (deleteNode.parent) {
        deleteNode.parent.right = deleteNode?.right || null;
      } else {
        this.rootNode = deleteNode.right;
      }
    }
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};
