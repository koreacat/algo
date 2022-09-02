const solution = (s) => {
    const arr = [];
    let index = -1;
    for(let i=0; i<s.length; i++) {
        if(index === -1) arr[++index] = s[i];
        else if(arr[index] === s[i]) index--;
        else arr[++index] = s[i]; 
    }
    return index === -1 ? 1 : 0;
}


console.log(
    solution('baabaa')
);