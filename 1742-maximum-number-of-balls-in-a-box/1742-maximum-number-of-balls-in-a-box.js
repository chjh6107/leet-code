/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
const countBalls = (lowLimit, highLimit) => {
    const counts = Array.from({ length: 46 }, () => 0);
    
    for ( let i = lowLimit; i <= highLimit; i++ )
        counts[String(i).split('').reduce((curr, acc) => Number(acc) + Number(curr), 0)]++;
    
    return Math.max(...counts);
};