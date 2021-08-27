function solution(n) {
    return ('' + n).split('').reverse().map((m) => {return Number(m)});
}