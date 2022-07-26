function solution(s) {
    let answer = s.length;

    for(let i=1; i < s.length / 2 + 1; i++) {
        const words = s.split('');
        const arr = [];
        let compressedStr = '';

        for(let j=0; j<words.length; j+=i) {
            arr.push(words.slice(j, j+i).join(''));
        }

        let repeatCnt = 1;
        for(let k=0; k<arr.length; k++) {
            if(arr[k] !== arr[k + 1]) {
                compressedStr += (repeatCnt === 1 ? '' : repeatCnt) + arr[k];
                repeatCnt = 1;
            }
            else repeatCnt++;
        }

        answer = Math.min(answer, compressedStr.length);
    }

    return answer;
}

// solution("aabbaccc"); // 7 2a2ba3c
// solution("ababcdcdababcdcd"); // 9
// solution("abcabcdede"); // 8
solution("abcabcabcabcdededededede"); // 14
// solution("xababcdcdababcdcd"); // 17