function solution(arr)
{
    const result = [];
    arr.forEach((value, index) => {
        if(index === 0) {
            result.push(value);
        } else if(index > 0 && arr[index-1] !== arr[index]) {
            result.push(value);            
        }
    })
    return result;
}