function solution(id_list, report, k) {
    const users = id_list.reduce((a, v) => ({...a, [v]: {}}), {});
    const reportArr = id_list.reduce((a, v) => ({...a, [v]: {}}), {});

    report.forEach(element => {
        const arr = element.split(' ');
        users[arr[0]][arr[1]] = null;
        reportArr[arr[1]][arr[0]] = null;
    });

    const blockId = [];

    Object.entries(reportArr).forEach(d => {
        const id = d[0];
        const count = Object.values(d[1]).length;
        if(count >= k) blockId.push(id);
    });

    const answer = Object.entries(users).map(d => {
        const targetId = Object.keys(d[1]);

        const mailCount = targetId.reduce((p, c) => {
            if(blockId.find(id => id === c)) return p + 1;
            return p;
        }, 0)

        return mailCount;
    })

    return answer;
}

solution(
    ["muzi", "frodo", "apeach", "neo"], 
    ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"],
    2
);

solution(
    ["con", "ryan"],
    ["ryan con", "ryan con", "ryan con", "ryan con"],
    3
);