function solution(s) {
    return s.split(' ').map((word) => {
        return word.toLowerCase().split('').reduce((acc, cur, idx) => {
            return idx % 2 === 0 ? acc + cur.toUpperCase() : acc + cur;
        }, '')
    }).join(' ');
}