function solution(survey, choices) {
    const score = [0, 3, 2, 1, 0, 1, 2, 3];
    const data = { 
        R: 0, T: 0,
        C: 0, F: 0,
        J: 0, M: 0,
        A: 0, N: 0,
    }

    const getKind = (a, b) => {
        if(data[a] >= data[b]) return a;
        else return b;
    }

    survey.forEach((e, i) => {
        if(choices[i] > 4) data[e[1]] += score[choices[i]]
        else if(choices[i] < 4) data[e[0]] += score[choices[i]]
    });

    return `${getKind('R', 'T')}${getKind('C', 'F')}${getKind('J', 'M')}${getKind('A', 'N')}`;
}

console.log(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]));
console.log(solution(["TR", "RT", "TR"], [7, 1, 3]));