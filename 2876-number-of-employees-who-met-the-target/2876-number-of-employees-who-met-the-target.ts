const numberOfEmployeesWhoMetTarget = (hours: number[], target: number): number => 
    hours.reduce((acc, curr) => acc += curr < target ? 0 : 1, 0);