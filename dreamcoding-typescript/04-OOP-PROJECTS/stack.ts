interface Stack {
  readonly size: number; // 스택의 현재 크기
  push(value: string): void; // 스택에 값을 추가하는 메서드
  pop(): string; // 스택에서 값을 제거하고 반환하는 메서드
}

type StackNode = {
  readonly value: string; // 스택 노드의 값
  readonly next: StackNode | undefined; // 다음 스택 노드를 가리키는 참조
};

class StackImpl implements Stack {
  private _size: number = 0;
  private head?: StackNode; // 스택의 맨 위에 있는 노드를 가리키는 참조

  constructor(private capacity: number) {} // 스택의 최대 용량을 지정

  // 현재 스택의 크기를 반환
  get size() {
    return this._size;
  }

  push(value: string) {
    if (this.size === this.capacity) {
      throw new Error('Stack is full!');
    }
    const node: StackNode = { value, next: this.head };
    this.head = node;
    this._size++;
  }

  pop(): string {
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
const stack = new StackImpl(10);

stack.push('Steve 1');
stack.push('Bob 2');
stack.push('Steve 3');

while (stack.size !== 0) {
  console.log(stack.pop());
}

stack.pop();
