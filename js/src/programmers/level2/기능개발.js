function solution(progresses, speeds) {
    const answer = [];
    let before = 0;
    let pos = 0;

    for (let i = 0; i < progresses.length; i++) {
        const n = Math.ceil((100 - progresses[i]) / speeds[i]);
        if (pos === 0) pos = 1;
        else {
            if (n > before) {
                answer.push(pos);
                pos = 1;
            } else pos++;
        }
        before = Math.max(before, n);
    }

    answer.push(pos);
    return answer;
}

console.log(
    solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])
)