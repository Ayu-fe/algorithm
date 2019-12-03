//有一个问题是这样描述的， 从一万个数中查找一个数，请问怎么做
//我们先创建一个10000个数的数组
let arr = [];
for(let i = 0; i < 10000; i ++) {
    arr[i] = Math.floor(Math.random() * 10000);
}

//搜索
let num = 0;
function searchNum(arr, target) {
    for(let i = 0; i < arr.length ; i ++) {
        num ++;
        if(arr[i] === target) return true;
    }
    return false;
}
// console.log(searchNum(arr, 1000));
// console.log(num);

//可以看出  要找到一个数 要遍历特别多次  对于算法我们没有什么要改的了 搜索一个数就是比较  但是我们用的数据结构不好  这里提出搜索二叉树
//先创建一个 二叉树的构造函数
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
//我们来创建一个二叉搜索树
//二叉搜索树的特性是，左子树的节点都比当前节点小，右子树的节点都比当前节点大

function buildSearchTree(arr) {
    if(arr == null || arr.length === 0) return;
    let root = new Node(arr[0]);
    for(let i = 0 ; i < arr.length; i ++) {
        addNode(root, arr[i]);
    }
    return root;
}

function addNode(root, num) {
    if(root == null) return;
    if(root.value === num) return;
    if(root.value < num) { //值比当前节点的值大  放在右边
        if(root.right == null) root.right = new Node(num);
        addNode(root.right, num);
    } else {
        if(root.left == null) root.left = new Node(num);
        addNode(root.left, num);
    }
}


//使用二叉搜索树来搜索
let num2 = 0;
function searchByTree(root, target) {
    if(root == null) return false;
    num2 += 1;
    if(root.value === target) return true;
    if(root.value < target) {
        return searchByTree(root.right, target);
    } else {
        return searchByTree(root.left, target);
    }
}

console.log(searchNum(arr, 1000));
console.log(num);

let searchTree = buildSearchTree(arr);

console.log(searchByTree(searchTree, 1000));
console.log(num2);






