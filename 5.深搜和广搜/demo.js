function Node (value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
let a = new Node('a');
let b = new Node('b');
let c = new Node('c');
let d = new Node('d');
let e = new Node('e');
let f = new Node('f');
let g = new Node('g');
a.left = c;
a.right = b;
c.left = f;
c.right = g;
b.left = d;
b.right = e;
//二叉树的深度优先搜索 和前序遍历的顺序是一样的
function deepSearch(root, target) {
    if(root == null) return false;
    if(root.value === target) return true;
    var left = deepSearch(root.left, target);
    var right = deepSearch(root.right, target);
    return left || right;
}
// console.log(deepSearch(a, 'c'));
//二叉树的广度优先搜索
function largeSearch (root, target) {
    if(root == null) return false;

}