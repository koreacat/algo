function solution(strings, n) {
    return strings.sort().sort((a, b) => a.charCodeAt(n) - b.charCodeAt(n))
}


function solution2(strings, n) {
    return strings.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));
}

console.log(solution(["sun", "bed", "car"], 1));
