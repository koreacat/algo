function solution(priorities, location) {
    const arr = priorities.map((v, i) => { return {index: i, value: v}});
    const sortedArr = [];

    while(arr.length) {
        if(arr[0].value >= Math.max(...arr.map(d => d.value))) sortedArr.push(arr.shift());
        else arr.push(arr.shift());
    }

    return sortedArr.findIndex(e => e.index === location) + 1;
}

solution([2, 1, 3, 2], 2);
solution([1, 1, 9, 1, 1, 1], 0);
