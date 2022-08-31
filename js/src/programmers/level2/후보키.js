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
    const keys = []
    const totalAttrCount = relation[0].length
    const indexList = Array.from(Array(totalAttrCount), (x, index) => index) // [0,1,2,3 ... totalAttrCount-1]

    const isUnique = (relation, attrIndexComb) => {
        let result = Array.from(Array(relation.length), x => '')
        for (const attrIndex of attrIndexComb) {
            relation.forEach((row, rowIndex) => result[rowIndex] += row[attrIndex])
        }
        return result.length === [...new Set(result)].length
    }

    const isMinimal = (attrComb) => {
        for (const key of keys) if (key.every(attr => attrComb.includes(attr))) return false
        return true
    }

    for (let attrCount = 1; attrCount <= totalAttrCount; attrCount++) {
        const combinations = getCombinations(indexList, attrCount)
        for (const attrComb of combinations) {
            if (isMinimal(attrComb) && isUnique(relation, attrComb)) keys.push(attrComb)
        }
    }

    return keys.length
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