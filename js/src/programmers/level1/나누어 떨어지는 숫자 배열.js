function solution(arr, divisor) {
    const result = arr.filter(val => val % divisor === 0).sort((a, b) => a - b);
    if(result.length === 0) return [-1];
    return result;
}