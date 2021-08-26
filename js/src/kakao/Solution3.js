// 가장 많이 책이 담긴 사진의 길이를 반환
// increasing 변수로 증가하는 중인지 감소하는 중인지 파악
// j의 인덱스를 옮겨 최적화
// sum에 자기자신 1을 더해 max 리턴

function solution(arr) {
    let max = 0;

    for(let i=0; i<arr.length; i++) {
        let increasing = true;
        let sum = 0;

        for(let j=i; j<arr.length-1; j++) {
            if(arr[j] > arr[j+1]) {
                increasing = false;
                sum++;
            } else if(arr[j] === arr[j+1]) {
                sum++;
            } else if(arr[j] < arr[j+1]) {
                if(increasing === false) {
                    j = arr.length;
                    break;
                } else {
                    sum++;
                }
            }
        }

        if(sum + 1 > max) max = sum + 1;
        if(sum > 0) i = i + sum - 1;
    }

    return max;
}