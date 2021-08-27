function solution(absolutes, signs) {
    let sum = 0;

    signs.forEach((value, index) => {
        value ? sum += absolutes[index] : sum -= absolutes[index]
    })
    
    return sum;
}