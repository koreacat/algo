function solution(s){
    const result = s.toLowerCase().split('').reduce((count, value) => {
        if(value === 'p') {
            return count + 1;
        } else if(value === 'y') {
            return count - 1;
        } else {
            return count
        }
    }, 0)

    return !result;
}