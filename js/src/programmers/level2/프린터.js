const sort = (arr, sortedArr) => {
    if(arr.length === 0) return;
    if(arr[0].value >= Math.max(...arr.map(d => d.value))) sortedArr.push(arr.shift());
    else arr.push(arr.shift());
    sort(arr, sortedArr);
}

function solution(priorities, location) {
    const sortedArr = [];
    sort(priorities.map((v, i) => { return {index: i, value: v}}), sortedArr);
    return sortedArr.findIndex(e => e.index === location) + 1;
}

solution([2, 1, 3, 2], 2);
solution([1, 1, 9, 1, 1, 1], 0);

// 재귀 말고 while 문으로 하면 더 빠를듯함