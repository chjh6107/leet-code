function isValid(s: string): boolean {
    const stack: string[] = [];

    const result = s.split('').every(v => {
        if ('([{'.includes(v)) {
            stack.push(v);
            return true;
        }
        const top = stack.at(-1);
        if ((v === ')' && top !== '(') ||
            (v === ']' && top !== '[') ||
            (v === '}' && top !== '{')) {
            return false;
        }
        stack.pop();
        return true;
    });

    return result && stack.length === 0;
};