function solution(s) {
    return +['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'].reduce((p, c, i) => p.replace(new RegExp(`${c}`, 'g'), i), s);
}

function solution(s) {
    const wordArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

    const answer = wordArr.reduce((prev, curr, i) => {
        const regexp = new RegExp(`${curr}`, 'gi');
        if(prev.includes(curr)) return prev.replace(regexp, i);
        else return prev;
    }, s)

    return Number(answer);
}

console.log(solution('one4seveneight'));