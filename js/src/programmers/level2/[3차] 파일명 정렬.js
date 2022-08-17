const getHead = (s) => s.split(/\d/g)[0].toLowerCase();
const getNumber = (s) => Number(s.split(/\D/g).filter(e => e !== '')[0]);

const solution = (files) => files.sort((a, b) => {
    const [headA, headB] = [getHead(a), getHead(b)];
    const [numberA, numberB] = [getNumber(a), getNumber(b)];

    if (headA === headB) return numberA - numberB;
    if (headA < headB) return -1;
    else if (headB < headA) return 1;
    else return 0;
});


console.log(
    solution(["img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"]),
    // solution(["F-5 Freedom Fighter", "B-50 Superfortress", "A-10 Thunderbolt II", "F-14 Tomcat"])
);