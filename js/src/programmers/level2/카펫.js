const solution = (brown, yellow) => {
    const sum = brown + yellow;
    for(let y=1; y<2000000; y++) {
        if(y ** 2 - (2 + brown / 2) * y + sum === 0) 
        return [sum / y, y];
    }
}

console.log(
    solution(10, 2),
    solution(8, 1),
    solution(24, 24)
);