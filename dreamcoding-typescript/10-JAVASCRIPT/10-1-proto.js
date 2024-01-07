function CoffMachine(beans) {
  this.beans = beans;
}

CoffMachine.prototype.makeCoffee = (shots) => {
  console.log('making...☕');
};

const machine1 = new CoffMachine(10);
const machine2 = new CoffMachine(20);

console.log(machine1);
console.log(machine2);
