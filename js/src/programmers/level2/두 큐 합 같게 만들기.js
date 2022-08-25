function solution(q1, q2) {
    const count = q1.length + q2.length + 100;
    let sum1 = q1.reduce((sum, cur) => sum + cur, 0);
    let sum2 = q2.reduce((sum, cur) => sum + cur, 0);
    let idx1 = 0;
    let idx2 = 0;

    for (let i = 0; i <= count; i++) {
        if (sum1 === sum2) {
            return i;
        } else if (sum1 > sum2) {
            if(idx1 > q1.length) {
                sum1 = sum1 - q2[idx1 % q1.length];
                sum2 = sum2 + q2[idx1 % q1.length];
            } else {
                sum1 = sum1 - q1[idx1 % q1.length];
                sum2 = sum2 + q1[idx1 % q1.length];
            }
            idx1++;
        } else {
            if(idx2 > q2.length) {
                sum1 = sum1 + q1[idx2 % q2.length];
                sum2 = sum2 - q1[idx2 % q2.length];
            } else {
                sum1 = sum1 + q2[idx2 % q2.length];
                sum2 = sum2 - q2[idx2 % q2.length];
            }
            idx2++;
        }
    }

    return -1;
}

console.log(
    // solution([3, 2, 7, 2], [4, 6, 5, 1]),
    // solution([1, 2, 1, 2], [1, 10, 1, 2]),
    solution([1, 1], [1, 5]),
)