//树的深搜
//创建一棵树

function Node(val) {
    this.val = val;
    this.childs = []
}

// var a = new Node('a');
// var b = new Node('b');
// var c = new Node('c');
// var d = new Node('d');
// var e = new Node('e');
// var f = new Node('f');

// a.childs.push(b);
// a.childs.push(c);
// a.childs.push(d);
// b.childs.push(e);
// b.childs.push(f);


//遍历一下吧
function deepFor(root) {
    if (root === null) return;
    console.log(root.val);
    for (var i = 0; i < root.childs.length; i++) {
        deepSearch(root.childs[i]);
    }
}
// console.log(deepFor(a));
//现在来看深搜
//这就是深搜 是不是很简单
function deepSearch(root, target) {
    if (root === null) return false;
    if (root.val === target) return true;
    var result = false;
    for (var i = 0; i < root.childs.length; i++) {
        result |= deepSearch(root.childs[i], target);
    }
    return result ? true : false;
}
// console.log(deepSearch(a, 'g'));
//我们再来试试树的广度优先搜索
//和二叉树一样的 广度优先搜索传入的得是一个节点的数组
function bfSearch(roots, target) {
    if (roots.length === 0) return false;
    var childs = [];
    for (var i = 0; i < roots.length; i++) {
        if (roots[i].val === target) return true;
        else childs = childs.concat(roots[i].childs);
    }
    return bfSearch(childs, target);;
}
// console.log(bfSearch([a], 'g'));


//现在我们来写图的深搜广搜  不一样的是 图需要记住 当前查过的点就不能再查了
//构建一个图
function Node2(val) {
    this.val = val;
    this.neighbor = [];
}
var a = new Node2('a')
var b = new Node2('b')
var c = new Node2('c')
var d = new Node2('d')
var e = new Node2('e')
a.neighbor.push(b);
a.neighbor.push(c);
b.neighbor.push(a);
b.neighbor.push(c);
b.neighbor.push(d);
c.neighbor.push(a);
c.neighbor.push(b);
c.neighbor.push(d);
d.neighbor.push(b);
d.neighbor.push(c);
d.neighbor.push(e);
e.neighbor.push(d);
//现在开始写图的深搜
function tuDeepSearch(node, target, path) {
    if (node === null) return false;
    if (path.indexOf(node) > -1) return false;
    if (node.val === target) return true;
    path.push(node);
    var result = false;
    for (var i = 0; i < node.neighbor.length; i++) {
        result |= tuDeepSearch(node.neighbor[i], target, path);
    }
    return result ? true : false;
}
// console.log(tuDeepSearch(a, 'e', []));
//深搜是不是也很简单 把广搜也写了吧

function tuBfSearch(nodes, target, path) {
    if (!nodes.length) return false;
    var arr = [];
    for (var i = 0; i < nodes.length; i++) {
        if (path.indexOf(nodes[i]) > -1) return false;
        if (nodes[i].val === target) { 
            return true;
        } else {
            arr = arr.concat(nodes[i].neighbor);
        }
        path.push(nodes[i]);
    }
    return tuBfSearch(arr, target, path);
}
// console.log(tuBfSearch([a], 'c', []));
//这么一来  广搜和深搜就都写完了
//其实吧   这东西道理上都是非常简单的东西 但其实也并不简单