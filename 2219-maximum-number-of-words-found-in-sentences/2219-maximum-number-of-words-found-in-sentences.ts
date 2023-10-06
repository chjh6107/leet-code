const mostWordsFound = (sentences: string[]): number => 
    Math.max(...sentences.map(v => v.split(' ').length))