function solution(n){
    return Number(('' + n).split('').reduce((sum, value) => {return Number(sum) + Number(value)}));
}