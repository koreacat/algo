const getCountOne = (n) => {
    return n.toString(2).split('').reduce((prev, curr) => curr === '1' ? Number(prev) + Number(curr) : Number(prev), 0);
}

function solution(n) {
    const count = getCountOne(n);
    let answer = 0;

    for(let i=n+1; i<1000000; i++) {
        const count2 = getCountOne(i);
        if(count === count2) {
            answer = i;
            return answer;
        }
    }

    return answer;
}

console.log(
solution(78)
);