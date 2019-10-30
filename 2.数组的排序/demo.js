//排序的本质 比较和交换

function change (arr, a, b) {
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
function compare(a, b) {
    if (a > b) return true;
    else return false;
}
let arr = [2, 4, 1, 3, 6, 5];
//冒泡排序 两两比较 每一轮挑一个大的或小的放后面
function sort (arr) {
    for( var i = 0 ; i < arr.length; i ++ ) {
        for (var j = 0; j < arr.length - 1 - i; j++) {
            if (compare(arr[j], arr[j + 1])) {
                change(arr, j, j + 1);
            }
        }
    }
}
// 比较排序  每一轮跳出一个最大的或最小的放到最后

function chooseSort (arr) {
    for( var i = 0 ; i < arr.length; i ++ ) {
        var maxIndex = 0;
        for(var j = 0 ; j < arr.length - i ; j ++) {
            if( compare(arr[j], arr[maxIndex]) ) {
                maxIndex = j;
            }
        }
        change(arr, maxIndex, arr.length - 1 - i);
    }
}

//快速排序  从第一个开始 后面的和第一个比较， 比第一个小的放前面， 比第一个大的放后面，然后前面的和后面的递归

function easyQuickSort (arr) {
    if( arr === null || arr.length === 0 ) return [];
    var leader = arr[0];
    var left = [];
    var right = [];
    for(var i = 1; i < arr.length; i ++) {
        if( compare(arr[i] , leader) ) right.push(arr[i]);
        else left.push(arr[i]);
    }
    left = easyQuickSort(left);
    right = easyQuickSort(right);
    left.push(leader);
    return left.concat(right);
}

//标准快速排序 通过指针来操作原数组，实现刚才说的快排的思想
function normalQuickSort (arr) {
    normalQuickSort2(arr, 0 , arr.length);
}
function normalQuickSort2 (arr, begin, end) {
    if ( begin >= end - 1 ) return;
    var left = begin;
    var right = end;
    do {
        do left ++; while( left < right && arr[left] < arr[begin] );
        do right --; while( right > left && arr[right] > arr[begin] );
        if( left < right) change(arr, left, right);
    }while(left < right);
    var swapPoint = left === right ? right - 1: right;
    change(arr, begin, swapPoint);
    normalQuickSort2(arr, 0, swapPoint);
    normalQuickSort2(arr, swapPoint + 1, end);
}



normalQuickSort(arr);
console.log(arr);