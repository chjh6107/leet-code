enum typeEnum {
    type,
    color,
    name
}

const countMatches = (items: string[][], ruleKey: string, ruleValue: string): number =>
    items.reduce((acc, curr) => curr[typeEnum[ruleKey]] === ruleValue ? acc + 1 : acc, 0)