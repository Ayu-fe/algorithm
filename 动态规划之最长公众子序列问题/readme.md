# 最长公共子序列问题

> 设计一个函数输出两个字符串的最长公共子序列

> 例如：' abc '和' ace '的最长公共子序列为' ac '。

这个问题是分治法的经典问题，具体思路可以这样考虑

1. 比较两个字符串的首位(str1[0], str2[0])，如果相等的话，那么结果则为 str1[0] + f(str1.substr(1), str2.substr(2));

2. 如果首位不相等的话，则分为两种情况：

    - f(str1, str2.substr(1)) 第一个字符串不变和去掉一个字符的第二个字符串相比

    - f(str1.substr(1), str2) 第二个字符串不变和去掉第一个字符的第一个字符串相比

    然后我们从这两种结果中挑选最长的返回

3. 那么所有的比较都可以大致的用上面的两种情况来递归讨论，所以我们不难写出算法

```
function LCS(str1, str2) {
    if(!str1 || !str2) return "";
    if(str1[0] == str2[0]) {
        return str1[0] + LCS(str1.substr(1), str2.substr(1));
    } else {
        var s1 = LCS(str1, str2.substr(1));
        var s2 = LCS(str1.substr(1), str2);
        if(s1.length > s2.length) {
            return s1;
        } else {
            return s2;
        }
         
    }
}
```

当然用分治法是可以解决这个问题，但我们不难发现一次次的递归不仅时间复杂度高，并且其中存在非常多重复的运算，我们是不是可以把已经算过的结果保存在一个数据结构中，下次递归前先看看这个数据结构中是否有我们需要的值，有的话就不用进行重复的递归了

所以出于以上思路，我们可以把这个算法优化一下

```
function LCS(str1, str2) {
    var total = []; //使用一个全局变量来存储每次的结果
    function _LCS(str1, str2) {
        if (!str1 || !str2) return "";
        //判断如果这次要递归的两个字符串已经在total中出现了，那么直接返回太多结果
        total.forEach(item => {
            if(item.str1 == str1 && item.str2 == str2) {
                return item.result;
            }
        })
        var newResult;
        if (str1[0] == str2[0]) {
            newResult = str1[0] + _LCS(str1.substr(1), str2.substr(1));
        } else {
            var s1 = _LCS(str1, str2.substr(1));
            var s2 = _LCS(str1.substr(1), str2);
            if (s1.length > s2.length) {
                newResult = s1;
            } else {
                newResult = s2;
            }
        }
        // 每次运算都把结果保存在total中
        total.push({
            str1,
            str2,
            result: newResult
        })
        return newResult;
    }
    return _LCS(str1, str2);
}

```

这个算法中，我们牺牲了空间复杂度来换取了时间复杂度，减少了不必要的重复运算，其实这就是动态规划和分治法的一个差异，他们思想是相同的，但是动态规划在分治的基础上加了一层存储，降低了时间复杂度