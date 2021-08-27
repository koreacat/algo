function solution(n) {
    return Number(('' + n).split('').sort((a, b) => {return b - a}).join(''));
}