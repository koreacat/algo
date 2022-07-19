function solution(N, stages) {
    const countArr = new Array(N + 2).fill(0);
    let leftPlayerNum = stages.length;
    let failLateArr = [];

    stages.forEach(e => countArr[e]++);

    for(let i=1; i<countArr.length - 1; i++) {
        const failLate = countArr[i] / leftPlayerNum;
        failLateArr.push({stage: i, failLate});
        leftPlayerNum -= countArr[i];
    }
    
    // console.log(failLateArr.sort((a, b) => b.failLate - a.failLate).map(d => d.stage));
    return failLateArr.sort((a, b) => b.failLate - a.failLate).map(d => d.stage);
}

solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);

//[3,4,2,1,5]

// 실패율이 높은 스테이지부터 내림차순
// 만약 실패율이 같은 스테이지가 있다면 작은 번호의 스테이지가 먼저 오도록 하면 된다.