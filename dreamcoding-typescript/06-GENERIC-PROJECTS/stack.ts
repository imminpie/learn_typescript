interface Stack<T> {
  readonly size: number; // 스택의 현재 크기
  push(value: T): void; // 스택에 값을 추가하는 메서드
  pop(): T; // 스택에서 값을 제거하고 반환하는 메서드
}

type StackNode<T> = {
  readonly value: T; // 스택 노드의 값
  readonly next: StackNode<T> | undefined; // 다음 스택 노드를 가리키는 참조
};

class StackImpl<T> implements Stack<T> {
  private _size: number = 0;
  private head?: StackNode<T>; // 스택의 맨 위에 있는 노드를 가리키는 참조

  constructor(private capacity: number) {} // 스택의 최대 용량을 지정

  // 현재 스택의 크기를 반환
  get size() {
    return this._size;
  }

  push(value: T) {
    if (this.size === this.capacity) {
      throw new Error('Stack is full!');
    }
    const node: StackNode<T> = { value, next: this.head };
    this.head = node;
    this._size++;
  }

  pop(): T {
    if (this.head == null) {
      throw new Error('Stack is empty!');
    }
    const node = this.head;
    this.head = node.next;
    this._size--;
    return node.value;
  }
}

// 용량이 10인 스택 객체 생성
const stack = new StackImpl<string>(10);

stack.push('Steve 1');
stack.push('Bob 2');
stack.push('Steve 3');

while (stack.size !== 0) {
  console.log(stack.pop());
}

const stack2 = new StackImpl<number>(10);

stack2.push(123);
stack2.push(456);
stack2.push(789);

while (stack2.size !== 0) {
  console.log(stack2.pop());
}
