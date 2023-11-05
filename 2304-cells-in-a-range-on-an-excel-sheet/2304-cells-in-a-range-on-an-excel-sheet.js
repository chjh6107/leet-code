/**
 * @param {string} s
 * @return {string[]}
 */
const cellsInRange = s => {
    const [[ startCol,startRow ],
            [ endCol, endRow ]] = s.split(':').map(v => v.split(''));
    const res = [];
    
    for( let i = startCol.charCodeAt(); i <= endCol.charCodeAt(); i++ )
        for( let j = Number(startRow); j <= Number(endRow); j++ )
            res.push(`${String.fromCharCode(i)}${String(j)}`);

    return res;
};