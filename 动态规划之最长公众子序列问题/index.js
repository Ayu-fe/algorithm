
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
console.log(LCS('你好吗', '你吃饭了吗'));