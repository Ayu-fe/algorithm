# 动态规划之斐波那契数列

这是动态规划中一个非常经典的问题

> 求斐波那契额数列第n项的数(第0项为0  第1项为1)

写出该数列 0 1 1 2 3 5 8  ...

不难得出结论   f(n) = f(n-1) + f(n-2)
    
动态规划只考虑当前状态下的值  所以我们可以用递归的形式写出该算法


```
function feibo(n) {
    if(n < 2) return n;
    return feibo(n - 1) + feibo(n - 2);
}
```
对 就这么简单  当然很多情况下 有些在线编程环境会认为 这样会越栈
所以我们也可以按照状态来写
```
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
```

随着时代的变迁  现在基本上不会直接考这个斐波那契数列了  顶多是考考大一的新手

但是根据斐波那契额数列衍生出了一系列的问题   变着法考斐波那契


比如最经典的一个问题  

## 青蛙跳台阶问题

>一个青蛙最远跳1个或2个台阶  请问青蛙跳到第n级台阶有几种跳法?

这个问题似乎很棘手，但是一顿分析以后我们可以得出几个结论

> 当青蛙最后一跳时，他一定在n-1或者n-2个台阶上

> 青蛙跳到第n个台阶的跳法一定是青蛙跳到n-1个台阶的跳法加上n-2个台阶的跳法

简单的说 f(n) = f(n-1) + f(n-2)  而这就是斐波那契的通项公式

所以我们不难写出算法
```
    function jump(n) {
        if(n <= 2) return n;
        return jump(n - 1) + jump(n - 2);
    }
    console.log(jump(4));
```

相信这个问题还是难不住大多数coder的，所以在该问题上衍生出一个更复杂的问题

## 变态青蛙跳台阶问题

> 一个青蛙可以跳任意阶的台阶，请问他跳上n级台阶有多少种跳法

根据上面的分析过程 我们依旧可以得出通项公式 f(n) = f(n-1) + f(n-2) + ··· + f(2) + f(1) + f(0)

这个问题复杂度确实上升了 但是也很简单
```
    function jump2(n) {
        if(n <= 2) return n;
        var result = 0;
        for(var i = 1; i < n; i ++) {
            result += jump2(n - i);
        }
        return result + 1;
    }
    console.log(jump2(5));
```
是不是很简单 关于动态规划的题呢  要多练多做题才行  这是一种思想

加油叭

