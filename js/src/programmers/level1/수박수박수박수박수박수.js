function solution(n) {
    return Array(n).fill(0).map((value, index) => {
        if(index % 2 === 0) {
            return '수';
        } else {
            return '박';
        }
    }).join('');
}