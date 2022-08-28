function solution(record) {
    const idMap = new Map();
    const history = [];    

    record.forEach(e => {
        const [command, uid, id] = e.split(' ');
        switch(command) {
            case 'Enter': 
                idMap.set(uid, id);
                history.push({uid, command});
                break;
            case 'Leave': 
                history.push({uid, command});
                break;
            case 'Change': 
                idMap.set(uid, id);
                break;
        }
    });
    
    return history.map(({uid, command}) => {
        const id = idMap.get(uid);
        switch(command) {
            case 'Enter': 
                return `${id}님이 들어왔습니다.`;
            case 'Leave': 
                return `${id}님이 나갔습니다.`;
        }
    });        
}

console.log(
    solution([
        "Enter uid1234 Muzi",
        "Enter uid4567 Prodo",
        "Leave uid1234",
        "Enter uid1234 Prodo",
        "Change uid4567 Ryan"
    ]),
);