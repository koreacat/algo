function solution(s) {
    if(s.length === 4 || s.length === 6) {
        if(!s.includes('e') && !isNaN(Number(s))) return true;
    } 
    return false;
}