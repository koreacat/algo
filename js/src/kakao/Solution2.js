// n의 각 자리수의 팩토리얼의 합이 m이 되고,
// 이 리스트에서 가장 높은 값 * 리스트의 크기 출력
// 다음 전투력이 계속 생기는것을 set으로 중복제거를 하며, 
// 무한 반복으로 찾다가 더 이상 size가 증가하지 않으면 끝

function solution(n) {
    const fatorial = (n) => {
        let result = 1;
        for(let i=2; i<=n; i++) result *= i;
        return result;
    }

    const set = new Set();
    let size = 0;
    let lastValue = n;
    let max = n;
    set.add(n);

    while(size !== set.size) {
        size = set.size;
        const arr = String(lastValue).split('');
        let sum = 0;

        arr.forEach((value) => {
            sum += fatorial(Number(value));
        })

        if(max < sum) max = sum;
        set.add(sum);
        lastValue = sum;
    }

    return max * set.size;
}