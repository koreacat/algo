const solution = (n) => {
    const arr = n.sort((a, b) => (parseInt((b.toString() + a.toString())) - parseInt(a.toString() + b.toString())));
    return arr[0] === 0 ? '0' : arr.join(''); 
}
