/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = strs => {
    let result = '';
    
    for (let i = 0; i < strs[0].length; i++) {
        if(strs.every(v => v[i] === strs[0][i]))
            result += strs[0][i];
        else break;
    }
    
    return result;
};