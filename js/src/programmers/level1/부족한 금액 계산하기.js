function solution(price, money, count) {
    let sum = 0;
    for(let i=1; i<=count; i++) {
        sum += i * price;
    }
    
    if(money - sum >= 0) {
        return 0;
    }else {
        return sum - money;
    }
    
    return answer;
}