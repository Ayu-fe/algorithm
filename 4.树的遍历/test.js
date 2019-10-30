function Node (value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

var a = new Node('a');
var b = new Node('b');
var c = new Node('c');
var d = new Node('d');
var e = new Node('e');
var f = new Node('f');
var g = new Node('g');

a.left = c;
a.right = b;
c.left = f;
c.right = g;
b.left = d;
b.right = e;

//前序遍历
function front (root) {
    console.log(root.value);
    if(root.left !== null) {
        front(root.left);
    } else return;
    front(root.right);
}
function front2 (root) {
    if(root == null) return;
    console.log(root.value);
    front2(root.left);
    front2(root.right);
}
// front(a);

//中序遍历
function middle (root) {
    if(root.left.left === null) {
        console.log(root.left.value);
        console.log(root.value);
        console.log(root.right.value);
    } else {
        middle(root.left);
        console.log(root.value);
        middle(root.right);
    }
}
function middle2 (root) {
    if(root == null) return;
    middle2(root.left);
    console.log(root.value);
    middle2(root.right);
}
// middle2(a);

//后续遍历
function behind (root) {
    if(root.left.left === null) {
        console.log(root.left.value);
        console.log(root.right.value);
        console.log(root.value);
    } else {
        behind(root.left);
        behind(root.right);
        console.log(root.value);
    }
}
function behind2 (root) {
    if(root == null) return;
    behind2(root.left);
    behind2(root.right);
    console.log(root.value);
}
// behind(a);
// behind2(a);

//根据前序和中序还原二叉树
var frontArr = ['a', 'c', 'f', 'g', 'b', 'd', 'e'];
var middleArr = ['f', 'c', 'g', 'a', 'd', 'b', 'e'];
function reBack (frontArr, middleArr) {
    if(frontArr == null || middleArr == null || frontArr.length === 0 || middleArr.length === 0 || frontArr.length !== middleArr.length ) return ;
    const root = new Node(frontArr[0]);
    const index = middleArr.indexOf(root.value);
    const frontLeft = frontArr.slice(1, index + 1);
    const frontRight = frontArr.slice(index + 1, frontArr.length);
    const middleLeft = middleArr.slice(0, index);
    const middleRight = middleArr.slice(index + 1, middleArr.length);
    root.left = reBack(frontLeft, middleLeft);
    root.right = reBack(frontRight, middleRight);
    return root;
}
var root = reBack(frontArr, middleArr);
console.log(root.left);
console.log(root.right);
// var behindArr = ['f', 'g', 'c', 'd', 'e', 'b', 'a'];
// var middleArr = ['f', 'c', 'g', 'a', 'd', 'b', 'e'];
function reBack2 (behindArr, middleArr) {
    if(behindArr == null || middleArr == null || behindArr.length === 0 || middleArr.length === 0 || behindArr.length !== middleArr.length) return null;
    var root = new Node(behindArr[behindArr.length - 1]);
    var index = middleArr.indexOf(root.value);
    var behindLeft = behindArr.slice(0, index);
    var behindRight = behindArr.slice(index, behindArr.length - 1);
    var middleLeft = middleArr.slice(0, index);
    var middleRight = middleArr.slice(index + 1, middleArr.length);
    root.left = reBack2(behindLeft, middleLeft);
    root.right = reBack2(behindRight, middleRight);
    return root;
}
// var root = reBack2(behindArr, middleArr);
// console.log(root.left);
// console.log(root.right);