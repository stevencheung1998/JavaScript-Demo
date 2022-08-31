class Queue {
  constructor() {
    this.items = [];
  }

  // 队列末尾追加元素
  enqueue(element) {
    this.items.push(element);
  }

  // 删除队列元素
  dequeue() {
    this.items.shift();
  }

  // 返回队列第一个元素
  front() {
    if (this.items.length) {
      return null;
    }
    return this.items[0];
  }

  // 队列是否为空
  isEmpty() {
    return !!this.items.length;
  }

  // 当前队列长度
  size() {
    return this.items.length;
  }
}
