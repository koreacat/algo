function solution(answers) {
    const patterns = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ];

    const counts = new Array(patterns.length).fill(0);
    answers.forEach((answer, i) => {
        patterns.forEach((pattern, j) => {
            if(answer === pattern[i % pattern.length]) counts[j]++;
        })
    });

    const answer = [];
    const max = Math.max(...counts);
    counts.forEach((num, i) => {
        if(num === max) answer.push(i + 1);
    })

    return answer;
}

solution([1,3,2,4,2]);