const getCombinations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((value) => [value]);

    arr.forEach((fixed, index, origin) => {
        const rest = origin.slice(index + 1);
        const combinations = getCombinations(rest, selectNumber - 1);
        const attached = combinations.map((combination) => [fixed, ...combination]);
        results.push(...attached);
    });

    return results;
};

function solution(relation) {
    const column = relation[0].length;
    let answer = 0;

    for (let i = 1; i <= 1; i++) {
        const t = Array.from(Array(column), () => new Array());

        for (let j = 0; j < relation.length; j++) {
            const com = getCombinations(relation[j], i).map(e => e.join(''));

            // for (let k = 0; k < com.length; k++) {
                // console.log(com[k]);
                t[0].push(com[0]);
            // }

            console.log(t);
            console.log(t[0]);
            console.log(t[1]);
        }
    }

    return answer;
}

console.log(
    solution(
        [
            ["100", "ryan", "music", "2"],
            ["200", "apeach", "math", "2"],
            ["300", "tube", "computer", "3"],
            ["400", "con", "computer", "4"],
            ["500", "muzi", "music", "3"],
            ["600", "apeach", "music", "2"]
        ]),
);