// const solution = (n,a,b)=>a.map((a,i)=>(a|b[i]).toString(2).padStart(n,0).replace(/0/g,' ').replace(/1/g,'#'));

function solution(n, arr1, arr2) {
    const answer = [];

    for(let i=0; i<n; i++) {
        const num1 = arr1[i].toString(2).padStart(n, '0');
        const num2 = arr2[i].toString(2).padStart(n, '0');
        answer.push(
            arr1.reduce((prev, curr, j) => {
                if(!!Number(num1[j]) || !!Number(num2[j])) return prev + '#'; 
                else return prev + ' ';
            }, ''));
    }

    return answer;
}

solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]);