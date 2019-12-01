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


//冒泡排序  两两比较 把大的放后面 一轮下来 最大的就被放到了最后 然后这个过程循环i轮；

function sort (arr) {
    for(let i = 0; i < arr.length; i ++) {
        for(let j = 0 ; j < arr.length - 1 - i ; j++) {
            if(compare(arr[j], arr[j + 1])) {
                change(arr, j, j + 1);
            }
        }
    }
}


// 选择排序  每一轮跳出一个最大的或最小的放到最后


function chooseSort (arr) {
    for(let i = 0; i < arr.length; i ++) {
        let maxIndex = 0;
        for(let j = 0; j < arr.length - i ; j ++) {
            if(compare(arr[j], arr[maxIndex])) {
                maxIndex = j;
            }
        }
        change(arr, maxIndex, arr.length - 1 - i);
    }
}

//快速排序  从第一个开始 后面的和第一个比较， 比第一个小的放前面， 比第一个大的放后面，然后前面的和后面的递归
function easyQuickSort (arr) {
    if(arr == null || arr.length === 0) { return []};
    let leader = arr[0];
    let left = [];
    let right = [];
    for(let i = 1; i < arr.length ; i ++) {
        if(compare(arr[i], leader)) {
            right.push(arr[i]);
        } else if (compare(leader, arr[i])) {
            left.push(arr[i]);
        }
    }
    left = easyQuickSort(left);
    right = easyQuickSort(right);
    left.push(leader);
    return left.concat(right);
}


//标准快速排序 通过指针来操作原数组，实现刚才说的快排的思想

let arr = [3, 5, 2, 7, 1, 4, 6];
function quickSort(arr) {
    return quickSort2(arr, 0, arr.length);
}
function quickSort2 (arr, begin, end) {
    if(begin > end - 1) return;
    let left = begin;
    let right = end;
    do{
        do { left++  } while (left < right && arr[left] < arr[begin]);
        do { right --} while ( left < right && arr[right] > arr[begin]);
        if(left < right) {
            change(arr, left, right);
        }
    } while(left < right);

    let swapPoint = left === right ? right - 1: right;
    change(arr, begin, swapPoint);
    quickSort2(arr, 0, swapPoint);
    quickSort2(arr, swapPoint + 1, end);
    return arr;
}

// console.log(quickSort(arr));


//插入排序
//所谓插入排序就是  先把第一个数当作是排好的， 然后用第二个数与第一个数做一个比较，把他插到排好序的数组中， 再对排好序的数组一一比较，决定到底要插到数组的头部尾部还是中间

function insertSort(arr) {
    for(let i = 1; i < arr.length; i ++) {
        for(let j = i - 1; j >= 0; j --) {
            if(compare(arr[j], arr[j + 1])) {
                change(arr, j, j + 1);
            }
        }
    }
    return arr;
}
//希尔排序  希尔排序是插入排序的改进版  按照一定的间隔对数组进行分组 对每一个数组都进行插入排序 然后缩小间隔 直到间隔为一 进行最后的插入排序 完成排序

function shellSort (arr) {
    for(let gap = Math.floor(arr.length / 2); gap > 0 ; gap = Math.floor( gap / 2)) {
        for(let i = gap; i < arr.length; i ++) {
            for(let j = i - gap; j >= 0; j -= gap ) {
                if(compare(arr[j], arr[j + gap])) {
                    change(arr, j, j + gap);
                }
            }
        }
    }
    return arr;
}

console.log(shellSort(arr));






