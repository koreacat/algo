function solution(d, budget) {
    const arr = d.sort((a, b) => a - b);
    let answer = 0;
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if(sum + arr[i] > budget){
            return answer;
        }
        sum+=arr[i];
        answer++;
    }

    return answer;
}

console.log(solution([1, 3, 2, 5, 4], 9));