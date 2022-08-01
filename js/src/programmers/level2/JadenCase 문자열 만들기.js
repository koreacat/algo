const solution = (s) => s.toLowerCase().split(' ').map(e => e[0] ? e.replace(e[0], e[0].toUpperCase()) : '').join(' ');

console.log(solution("3people unFollowed me"));
console.log(solution("for the last week"));