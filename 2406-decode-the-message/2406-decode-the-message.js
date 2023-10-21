/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
    const table = {' ': ' '};
    const alps = 'abcdefghijklmnopqrstuvwxyz';
    let cursor = 0;
    key.split('').forEach(v => {
        if(table[v]) return;
        table[v] = alps[cursor++];
    });
    return message.split('').map(v => table[v]).join('');
};
