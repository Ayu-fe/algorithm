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
function deepSearch (root, target) {
    if(root == null) return false;
    if(root.value === target) return true;
    var left = deepSearch(root.left, target);
    var right = deepSearch(root.right, target);
    return left || right;
}
// console.log(deepSearch(a, 'c'));


//二叉树的广度优先搜索 广度优先搜索是一层一层的搜索 所以我们应该传一个root的集合
console.log(largeSearch([a], 'n'));
function largeSearch(rootList, target) {
    if(rootList === null || rootList.length === 0) return false;
    var childList = [];
    for(var i = 0; i < rootList.length; i ++) {
        if(rootList[i] !== null && rootList[i].value === target) {
            return true;
        } else if(rootList[i] !== null) {
            childList.push(rootList[i].left);
            childList.push(rootList[i].right);
        } else return false;
    }
    return largeSearch(childList, target);
}