function solution(sizes) {
    let w = 0;
    let h = 0;

    sizes.forEach(size => {
        const max = Math.max(...size);
        const min = Math.min(...size);
        if(w < max) w = max;
        if(h < min) h = min;
    });

    return w * h;
}

console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]]));