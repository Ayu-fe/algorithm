function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

let a = new Node('a');
let b= new Node('b');
let c = new Node('c');
let d = new Node('d');

a.left = b;
a.right = c;
b.left = d;

//获取一颗树的深度 不得不说 这样来获取一个树的深度真妙
function getDeep(root) {
    if( root == null) return 0;
    var leftDeep = getDeep(root.left);
    var rightDeep = getDeep(root.right);
    return Math.max(leftDeep, rightDeep) + 1;
}

//判断一颗树是否为平衡二叉树
function isBalance( root ) {
    if( root == null) return true;
    var leftDeep = getDeep(root.left);
    var rightDeep = getDeep(root.right);
    if(Math.abs(leftDeep - rightDeep) > 1) {
        return false;
    } else {
        return isBalance(root.left) && isBalance(root.right);
    }
}
console.log(isBalance(a));

