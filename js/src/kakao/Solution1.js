// 한번만 사용한 첫 문자 찾기 
// hackthegame -> 3
// falafal -> -1
// UTF16 알파벳 코드로 카운팅

function Solution1(s) {
    let alphabet = new Array(26).fill(0);
    const arr = s.split('');
    let result = -1;

    arr.forEach((value) => {
        alphabet[value.charCodeAt() - 97]++;
    });

    for(let i=0; i<arr.length; i++) {
        const value = arr[i].charCodeAt() - 97;
         
        if(alphabet[value] === 1) {
            result = i + 1;
            break;
        }
    }

    return result;
}