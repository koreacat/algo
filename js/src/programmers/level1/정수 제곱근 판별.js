function solution(n) {
    const sqrtNum = Math.sqrt(n);
    Number.isInteger(sqrtNum) ? (sqrtNum + 1) ** 2 : -1;
}