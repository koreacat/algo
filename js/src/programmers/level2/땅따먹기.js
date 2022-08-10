const solution = (land) => {
    const answerArr = [land[0]];    

    for(let i=1; i<land.length; i++) {
        const prevArr = answerArr[i-1];
        const curArr = land[i];
        answerArr.push(curArr.map((e, i) => curArr[i] + Math.max(...prevArr.filter((e, j) => i !== j))));
    }

    return Math.max(...answerArr[answerArr.length - 1]);
}

console.log(
solution([[1, 1, 1, 1],[2, 2, 2, 3],[3, 3, 3, 6], [4, 4, 4, 7]])
);