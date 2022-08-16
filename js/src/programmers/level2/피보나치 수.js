const arr = [0, 1];
const div = 1234567;
const solution = (n) => {
    for(let i=2;i<=n;i++) !arr[i] && (arr[i] = ((arr[i-2] % div) + (arr[i-1] % div) % div));
    return arr[n] % div;
}

console.log(
    solution(3)
);

// (A + B) % C
// ((A % C) + (B % C)) % C