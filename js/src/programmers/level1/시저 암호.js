function solution(s, n) {
    const convertChar = (c, n) => {
        const code = c.charCodeAt();
        if(code >= 65 && code <= 90) {
            if(code + n > 90) return String.fromCharCode(code + n - 26);
            else return String.fromCharCode(code + n);
        } else if(code >= 97 && code <= 122) {
            if(code + n > 122) return String.fromCharCode(code + n - 26);
            else return String.fromCharCode(code + n);
        } else {
            return ' ';
        }
    }
    
    return s.split('').map((c) => {
        return convertChar(c, n); 
    }).join('');
}