function solution(n, lost, reserve) {
    const arr = new Array(n).fill(1);

    lost.forEach(e => {
        arr[e - 1] -= 1;
    });

    reserve.forEach(e => {
        arr[e - 1] += 1;
    });


    arr.forEach((e, i) => {
        if(e === 2) {
            if(i > 0 && arr[i - 1] === 0) {
                arr[i]--;
                arr[i - 1]++;
                return;
            }
            if(i < arr.length + 1 && arr[i + 1] === 0) {
                arr[i]--;
                arr[i + 1]++;
                return;
            }

        }
    });


    return arr.filter(e => e !== 0).length;
}

solution(3, [3], [1]);