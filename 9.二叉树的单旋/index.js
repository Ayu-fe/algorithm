/**
* 二叉树的单旋是基于平衡二叉树提出的
* 在查找一个数时，我们构建了二叉搜索树来寻找一个数可以大大降低搜索次数
* 但是这棵树可能不是平衡的 如果不是平衡的 那么搜索次数会增加几次 为了追求极致 我们要把生成的二叉搜索树变成一个平衡的二叉搜索树
* 所以我们写了判断平衡二叉树的方法  这一次我们来讨论如何将不平衡的二叉搜索数变为平衡二叉搜索树
* */

//我们还是先创建一个节点的构造函数
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
//创建一个不平衡的二叉搜索树
let node5 = new Node(5);
let node7 = new Node(7);
let node6 = new Node(6);
let node8 = new Node(8);

node5.right = node7;
node7.left = node6;
node7.right = node8;

//复习一下以前的知识  我们写一个判断平衡二叉树的方法
function getDeep(root) {
    if(root == null) return 0;
    let leftDeep = getDeep(root.left);
    let rightDeep = getDeep(root.right);
    return Math.max(leftDeep, rightDeep) + 1;
}
function isBalance(root) {
    if(root == null) return true;
    let leftDeep = getDeep(root.left);
    let rightDeep = getDeep(root.right);
    if(Math.abs(leftDeep - rightDeep) > 1) {
        return false;
    }else {
        return isBalance(root.left) && isBalance(root.right);
    }
}
// console.log(isBalance(node5));
//大功告成 现在我们开始写单旋
//所谓单旋就是通过旋转来让本来不平衡的二叉树变为平衡二叉树
/**
 * 单旋分为左单旋和右单旋
 * 左单旋的步骤：1：找出新的根节点为旋转节点的右孩子  2：找出变化节点为旋转节点右孩子的左孩子 3： 让旋转节点的右孩子变成变化节点
 *              4： 让新的根节点的左孩子为旋转节点  5：返回新根节点
 * 右单旋的步骤：1：找出新的根节点为旋转节点的左孩子  2：变化节点为旋转节点左孩子的右孩子 3：让旋转节点的的左孩子变成变化节点
 *              4： 让新的根节点的右孩子变为旋转节点 5：返回新根节点
 * */
function change(root) {
    if(isBalance(root)) return root;
    if(root.left) {
        root.left = change(root.left);
    }
    if(root.right) {
        root.right = change(root.right);
    }
    let leftDeep = getDeep(root.left);
    let rightDeep = getDeep(root.right);
    if(Math.abs(leftDeep - rightDeep) < 2) {
        return true;
    } else if (leftDeep > rightDeep) {
        //开始右旋
        return rightRotate(root);
    } else {
        //开始左旋
        return leftRotate(root);
    }
}
function leftRotate(root) {
    //把上面那5部搬过来就好啦
    let newRoot = root.right;
    let changeRoot = root.right.left;
    root.right = changeRoot;
    newRoot.left = root;
    return newRoot;

}
function rightRotate(root) {
    let newRoot = root.left;
    let changeRoot = root.left.right;
    root.left = changeRoot;
    newRoot.right = root;
    return newRoot;
}
// console.log(isBalance(node5));
// let newRoot = change(node5);
// console.log(isBalance(newRoot));

//ok了  这样一来 一颗不平衡二叉树就变成一个平衡二叉树了
//这些算法 说简单不简单 说难不难  要时常思考  时常练习
//不管以后用不用得到 算法永远都是最重要的最起码可以锻炼一个人的思维能力  所以要时常练习
//我们用一下吧
//来一个二叉搜索树的算法

function searchTree(arr) {
    let root = new Node(arr[0]);
    for(let i = 0; i < arr.length; i ++) {
        addNode(root, arr[i]);
    }
    return root;
}
function addNode(root, curValue) {
    if(root == null) return;
    if(root.value === curValue) return;
    if(root.value < curValue) {
        if(root.right == null) root.right = new Node(curValue);
        addNode(root.right, curValue);
    } else {
        if(root.left == null) root.left = new Node(curValue);
        addNode(root.left, curValue);
    }
}
let arr = [];
for(let i = 0 ; i < 10000; i ++) {
    arr[i] = Math.floor(Math.random() * 10000);
}
let tree = searchTree(arr);
console.log(isBalance(tree));
let newTree = change(tree);
console.log(isBalance(newTree));