//继续创建一个二叉树呗
function Node (value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
var a1 = new Node('a');
var b1 = new Node('b');
var c1 = new Node('c');
var d1 = new Node('d');
var e1 = new Node('e');
var f1 = new Node('f');
var g1 = new Node('g');

a1.left = c1;
a1.right = b1;
c1.left = f1;
c1.right = g1;
b1.left = d1;
b1.right = e1;

var a2 = new Node('a');
var b2 = new Node('b');
var c2 = new Node('c');
var d2 = new Node('d');
var e2 = new Node('e');
var f2 = new Node('f');
var g2 = new Node('g');
a2.left = c2;
a2.right = b2;
c2.left = f2;
c2.right = g2;
b2.left = d2;
b2.right = e2;
d2.left = e2;
//二叉树的比较  在拓扑关系中 树的左子树和右子树交换是不变了，所以我们应该确定左子树和右子树交换位置还算不算同一颗二叉树
//交换不算同一颗二叉树 那就左子树和左子树比 右子树和右子树比
function compareTree(root1, root2) {
    if( root1 === root2 ) return true;
    if(root1 == null && root2 != null || root1 != null && root2 == null) return false;
    if(root1.value !== root2.value) return false;
    return compareTree(root1.left, root2.left) && compareTree(root1.right, root2.right);
}
// console.log(compareTree(a1, a2));
//如果交换左右子树还是同一颗二叉树的话 就多比较两步就好了
function compareTree2(root1, root2) {
    if( root1 === root2 ) return true;
    if(root1 == null && root2 != null || root1 != null && root2 == null) return false;
    if(root1.value !== root2.value) return false;
    return compareTree2(root1.left, root2.left) && compareTree2(root1.right, root2.right) || compareTree2(root1.left, root2.right) && compareTree2(root1.right, root2.left);
}
// console.log(compareTree2(a1, a2));

//这样的二叉树比较不能解决实际问题  因为不知到时哪里发生了变化 所以我们要写一个二叉树的diff算法 希望知道第二颗树相较于第一颗树的变化
//我们希望传两棵树和一个控数组，程序运行后返回空数组， 在空数组中显示树的变化
function diffTree(root1, root2, diffList) {
    if(root1 === root2) return diffList;
    if(root1 == null && root2 != null) {
        diffList.push({
            type: '新增',
            origin: null,
            now: root2
        })
    }else if (root1 != null && root2 == null) {
        diffList.push({
            type: '删除',
            origin: root1,
            now: null
        })
    } else if(root1.value !== root2.value) {
        diffList.push({
            type: '修改',
            origin: root1,
            now: root2
        })
        diffTree(root1.left, root2.left, diffList);
        diffTree(root1.right, root2.right, diffList);
    } else {
        diffTree(root1.left, root2.left, diffList);
        diffTree(root1.right, root2.right, diffList);
    }
    return diffList;
}
var diffList = [];
console.log(diffTree(a1, a2, diffList));