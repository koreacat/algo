function solution(participant, completion) {
    const map = new Map();
    participant.forEach(e => {
        map.set(e, map.get(e) ? map.get(e) + 1 : 1); 
    });
    
    
    completion.forEach(e => {
        map.set(e, map.get(e) - 1)    
    });

    let answer = '';        
    
    map.forEach((v, k) => {
        if(v !== 0) {
            answer = k;
            return;
        }
    })
    
    return answer;
}