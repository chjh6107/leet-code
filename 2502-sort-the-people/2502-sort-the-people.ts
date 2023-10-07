const sortPeople = (names: string[], heights: number[]): string[] =>
  names.map((v, i)=> ({name: v, height: heights[i]}))
    .sort((a, b) => b.height - a.height)
    .map(v => v.name)
   