/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const stack = [];
    const mapping = { ')': '(', '}': '{', ']': '[' };

    for (let char of s) {
        if (mapping[char]) { // Closing parenthesis
            if (!stack.length || stack[stack.length - 1] !== mapping[char]) {
                return false;
            }
            stack.pop();
        } else { // Opening parenthesis
            stack.push(char);
        }
    }

    return !stack.length;
};

