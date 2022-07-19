function solution(numbers) {
    const countArr = new Array(10).fill(0);
    numbers.forEach(e => countArr[e]++);

    const answer = countArr.reduce((prev, curr, i) => {
        if(curr === 0) return prev + i;
        return prev;
    }, 0)

    return answer;
}

solution([1,2,3,4,6,7,8,0]);