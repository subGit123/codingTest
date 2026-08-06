const solution = (a, b) => {
    const result = [];
    if (a > b) {
        for (let i = b; i <= a; i++) {
            result.push(i);
        }
    } else {
        for (let i = a; i <= b; i++) {
            result.push(i);
        }
    }
    return result.reduce((a,b) => a+b);
};


