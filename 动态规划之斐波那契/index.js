//我们来讨论一下 动态规划中一个非常经典的问题
//斐波那契额数列   求该数列第n项的数(第0项为0  第1项为1)
//写出该数列 0 1 1 2 3 5 8    
//不难得出结论   f(n) = f(n-1) + f(n-2)
//动态规划只考虑当前状态下的值  所以我们可以用递归的形式写出该算法

function feibo(n) {
    if(n < 2) return n;
    return feibo(n - 1) + feibo(n - 2);
}
//对 就这么简单  当然很多情况下 有些在线编程环境会认为 这样会越栈
//所以我们也可以按照状态来写
function feibo2(n) {
    if(n < 2) return n;
    var first = 0;
    var second = 1;
    var third;
    for(var i = 2; i <= n; i ++) {
        third = first + second;
        first = second;
        second = third;
    }
    return third;
}
// console.log(feibo2(6));

//随着时代的变迁  现在基本上不会直接考这个斐波那契数列了  顶多是考考大一的新手
//但是根据斐波那契额数列衍生出了一系列的问题   变着法考斐波那契

//比如最经典的一个问题  青蛙跳台阶问题
//一个青蛙最远跳1个或2个台阶  请问青蛙跳到第n级台阶有几种跳法

function jump(n) {
    if(n <= 2) return n;
    return jump(n - 1) + jump(n - 2);
}
// console.log(jump(4));

function jump2(n) {
    if(n <= 2) return n;
    var result = 0;
    for(var i = 1; i < n; i ++) {
        result += jump2(n - i);
    }
    return result + 1;
}
console.log(jump2(5));
