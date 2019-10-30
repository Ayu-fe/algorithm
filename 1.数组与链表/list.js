//定义一个链表
function Node(value) {
    this.value = value;
    this.next = null;
}
let a = new Node(1);
let b = new Node(2);
let c = new Node(3);
let d = new Node(4);

a.next = b;
b.next = c;
c.next = d;
//链表的循环
function forlist (root) {
    if(root == null) {
        return;
    } else {
        console.log(root.value);
        forlist(root.next);
    }

}
// forlist(a);
//链表的逆置
function backList(root) {
    if(root.next.next == null) {
        root.next.next = root;
        return root.next;
    } else {
        var result = backList(root.next);
        root.next.next = root;
        root.next = null;
    }
    return result;
}
var result = backList(a);
forlist(result);