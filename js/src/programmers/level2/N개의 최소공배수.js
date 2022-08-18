function solution(arr) {
    let max = Math.max(...arr);
    let num = max;
    let answer = 0;

    while(answer === 0) {
        let b = true;

        arr.forEach(e => {
            if(num % e !== 0) {
                b = false;
                return;
            }
        });

        if(b) answer = num;
        num += max;
    }

    return answer;
}

console.log(
    solution([2,6,8,14])
)