//队和栈 队就是管子，先进先出  栈就是个箱子， 先进后出

//封装一个栈
function Stack () {
    this.arr = [];
    this.push = (value) => {
        this.arr.push(value);
    };
    this.pop = () => {
        this.arr.pop();
    };
    return this.arr;
}
const stack = new Stack();
// stack.push(1);
// console.log(stack);
// stack.push(2);
// console.log(stack);
// stack.pop();
// console.log(stack);

//封装一个队
function Queue() {
    this.arr = [];
    this.push = (value) => {
        this.arr.push(value);
    }
    this.pop = () => {
        return this.arr.shift();
    }
}
var queue = new Queue();
queue.push(23);
console.log(queue);
queue.push(11);
console.log(queue);
queue.pop();
console.log(queue);