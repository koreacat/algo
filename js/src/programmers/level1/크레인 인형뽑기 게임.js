function solution(board, moves) {
    const N = board.length;
    const topIndexArr = new Array(N).fill(-1);
    let basket = [];
    let count = 0;

    for(let i=0; i<N; i++) {
        for(let j=0; j<N; j++) {
            if(topIndexArr[j] === -1 && board[i][j] !== 0) topIndexArr[j] = i;
        }
    }

   for(let i=0; i<moves.length; i++) {
    const num = moves[i] - 1;

    if(topIndexArr[num] === N) { 
        continue;
    }
    else {
        const lastNum = board[topIndexArr[num]][num];
        topIndexArr[num]++;
        if(lastNum === basket[basket.length - 1]) {
            count++;
            basket = [...basket.slice(0, basket.length - 1)];
        } else {
            basket.push(lastNum);
        }
    }
   }

   return count * 2;
}

solution([
    [4,0,0,0,0],
    [4,0,1,0,3],
    [4,4,5,0,1],
    [4,4,4,4,2],
    [4,4,1,3,1]
], [1,2,1,2,1,2,1,1]);

// 4 3 1 1 3 2 X 4