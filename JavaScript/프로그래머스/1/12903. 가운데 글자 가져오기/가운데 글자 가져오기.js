function solution(s) {
    let strleg = s.length;
    if (strleg % 2 === 0) {
        return s[strleg / 2 - 1] + s[strleg / 2];
    } else {
        return s[Math.floor(strleg / 2)];
    }
}
