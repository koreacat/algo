const positionMap = {
    1: {1: 0, 2: 1, 4: 1, 3: 2, 5: 2, 7: 2, 6: 3, 8: 3, '*': 3, 9: 4, 0: 4, '#': 5},
    2: {2: 0, 1: 1, 3: 1, 5: 1, 4: 2, 6: 2, 8: 2, 7: 3, 9: 3, 0: 3, '*': 4, '#': 4},
    3: {3: 0, 2: 1, 6: 1, 1: 2, 5: 2, 9: 2, 4: 3, 8: 3, '#': 3, 7: 4, 0: 4, '*': 5},
    4: {4: 0, 1: 1, 5: 1, 7: 1, 2: 2, 6: 2, 8: 2, '*': 2, 3: 3, 9: 3, 0: 3, '#': 4},
    5: {5: 0, 2: 1, 4: 1, 6: 1, 8: 1, 1: 2, 3: 2, 7: 2, 9: 2, 0: 2, '*': 3, '#': 3},
    6: {6: 0, 3: 1, 5: 1, 9: 1, 2: 2, 4: 2, 8: 2, '#': 2, 1: 3, 7: 3, 0: 3, '*': 4},
    7: {7: 0, 4: 1, 8: 1, '*': 1, 0: 2, 9: 2, 5: 2, 1: 2, 2: 3, 6: 3, '#': 3, 3: 4},
    8: {8: 0, 5: 1, 7: 1, 9: 1, 0: 1, 2: 2, 4: 2, 6: 2, '*': 2, '#': 2, 1: 3, 3: 3},
    9: {9: 0, 6: 1, 8: 1, '#': 1, 3: 2, 5: 2, 7: 2, 0: 2, 2: 3, 4: 3, '*': 3, 1: 4},
    '*': {'*': 0, 7: 1, 0: 1, 4: 2, 8: 2, '#': 2, 1: 3, 5: 3, 9: 3, 2: 4, 6: 4, 3: 5},
    0: {0: 0, 8: 1, '*': 1, '#': 1, 7: 2, 5: 2, 9: 2, 4: 3, 2: 3, 6: 3, 1: 4, 3: 4},
    '#': {'#': 0, 0: 1, 9: 1, '*': 2, 8: 2, 6: 2, 3: 3, 5: 3, 7: 3, 2: 4, 4: 4, 1: 5},
}

const isLeft = (num) => {
    if(num === 1 || num === 4 || num === 7) return true;
    else false;
}

const isRight = (num) => {
    if(num === 3 || num === 6 || num === 9) return true;
    else false;
}

const getDistance = (pos, num) => {
    return positionMap[pos][num];
}

function solution(numbers, hand) {
    let leftPos = '*';
    let rightPos = '#';

    return numbers.map((num) => {
        if(isLeft(num)) {
            leftPos = num;
            return 'L';
        } else if(isRight(num)) {
            rightPos = num;
            return 'R';
        } else {
            const leftDistance = getDistance(leftPos, num);
            const rightDistance = getDistance(rightPos, num);
            
            // 가까운 손가락으로 누르기
            if(leftDistance < rightDistance) {
                leftPos = num;
                return 'L';
            } else if(leftDistance > rightDistance) {
                rightPos = num;
                return 'R';
            } else if(leftDistance === rightDistance){
                // 거리가 같다면 자주 쓰는 손으로 누르기
                if(hand === 'left') {
                    leftPos = num;
                    return 'L';
                } else if(hand === 'right') {
                    rightPos = num;
                    return 'R';
                }
            }
        }
    }).join('');
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right'));