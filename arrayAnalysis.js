function analyzeArray(array) {

    
    return {
        average: getAverage(array),
        min: getMin(array),
        max: getMax(array),
        length: array.length
    }
}

function getAverage(array) {
    return array.reduce((a, b)=> a + b, 0) / array.length;
}

function getMin(array) {
    let min = Infinity

    for (let num of array) {
        if (num < min) {
            min = num
        }
    }

    return min
}

function getMax(array) {
    let min = - Infinity

    for (let num of array) {
        if (num > min) {
            min = num
        }
    }

    return min
}


export { analyzeArray }