function solution(lottos, win_nums) {
    const hitCount = win_nums.reduce((prev, curr) => {
        if(lottos.find(e => e === curr)) return prev + 1;
        return prev;
    }, 0);

    return [Math.min(7 - hitCount - lottos.filter(e => e === 0).length, 6), Math.min(7 - hitCount, 6)];
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]));
console.log(solution([38, 19, 20, 40, 15, 25], [38, 19, 20, 40, 15, 25]));
console.log(solution([37, 18, 21, 41, 16, 26], [38, 19, 20, 40, 15, 25]));
