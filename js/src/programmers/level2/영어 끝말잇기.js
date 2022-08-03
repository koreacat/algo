function solution(n, words) {
    let answer = [0, 0];
    const set = new Set();
    set.add(words[0]);

    for(let i=1;i<words.length;i++) {
        const a = i%n+1;
        const b = Math.ceil((i+1) / n);

        if(words[i-1].charAt(words[i-1].length-1) !== words[i].charAt(0)) {
            return [a, b];
        }

        if(set.has(words[i])) {
            answer = [a, b];
            return [a, b];
        } else set.add(words[i]);
    }

    return answer;
}

console.log(solution(3, ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]));
console.log(solution(5, ["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"]));
console.log(solution(2, ["hello", "one", "even", "never", "now", "world", "draw"]));