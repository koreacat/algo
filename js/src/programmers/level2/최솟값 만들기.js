function solution(A,B){
    let answer = 0;
    const a = A.sort((a, b) => a - b);
    const b = B.sort((a, b) => b - a);
    A.forEach((_, i) => {
        answer += a[i] * b[i];
    });
    return answer;
}  

console.log(
solution([1, 4, 2], [5, 4, 4])
);