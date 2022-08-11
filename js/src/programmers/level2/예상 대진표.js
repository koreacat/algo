function solution(n,a,b){
    const exponent = Math.log2(n);
    let min = 0;
    let mid = 2**(exponent - 1);
    let max = 2**exponent;
    let answer = 0;

    for(let i=0; i<exponent; i++) {
        if(a<=mid && b<=mid) {
            max = mid;
            mid = (min + max) / 2;
        } else if (a>mid && b>mid) {
            min = mid + 1;
            mid = (min - 1 + max) / 2;
        }
        else {
            answer = exponent - i;
            return answer;
        }
    }

    return answer;
}

function solution(n,a,b)
{
    let answer = 0;
    while(a !== b) {
        a = Math.ceil(a/2);
        b = Math.ceil(b/2);
        answer++;
    }

    return answer;
}

console.log(
solution(8, 1, 3)
);