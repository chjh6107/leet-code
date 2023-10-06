const restoreString = (s: string, indices: number[]): string => {
    const arr = Array.from({length:s.length})
    indices.forEach((v, i) => arr[v] = s[i])
    return arr.join('')
}