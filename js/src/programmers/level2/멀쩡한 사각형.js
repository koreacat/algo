function solution(w, h) {
    let gcd = 1;

    for(let i=1;i<Math.max(w,h)+1;i++) {
        if(w%i===0 && h%i===0) gcd = i;
    }

    return w*h - (w+h-gcd)
}

console.log(solution(8, 12));