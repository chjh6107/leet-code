const checkIfPangram = (sentence: string): boolean => {
    const arr: number[] = Array.from({length: 26},() => 0)

    sentence.split('').map(v => arr[v.charCodeAt(0) - 97]++)
    
    return !arr.includes(0)
};