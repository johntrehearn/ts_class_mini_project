export function getNumberOfGrades(grades: number[]) {
    return grades.length;

}

export function getSumGrades(grades: number[]) {
    let total = 0;
    for (let i = 0; i < grades.length; i++) {
        total += grades[i];
    }
    return total;

}

export function getAverageValue(grades: number[]) {
    let total = 0;
    let average = 0;
    for (let i = 0; i < grades.length; i++) {
        total += grades[i];
    }
    average = total / grades.length;
    return average;
}

export function getPassingGrades(grades: number[]) {
    let passingGrades = [];
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] >= 10) {
            passingGrades.push(grades[i]);
        }
    }
    return passingGrades;

}


export function getFailingGrades(grades: number[]) {
    let failingGrades = [];
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] >= 10) {
            failingGrades.push(grades[i]);
        }
    }
    return failingGrades;

}

export function getRaisedGrades(grades: number[]) {
    let raisedGrades = [];
    for (let i = 0; i < grades.length; i++) {
        raisedGrades.push(grades[i] + 1);
    }
    return raisedGrades;

}