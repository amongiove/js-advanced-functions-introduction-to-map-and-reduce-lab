// Your code here

function mapToNegativize(array) {
   return array.map(negativize)  
}

    function negativize(num) {
        return (-1 * num);
    }

function mapToNoChange(array) {
    return array.map(noChange)
}

    function noChange(num) {
        return num
    }

function mapToDouble(array) {
    return array.map(double)
}

    function double(num) {
        return (2 * num)
    }

function mapToSquare(array) {
    return array.map(square)
}

    function square(num) {
        return (num * num)
    }

function reduceToTotal(array, start=0) {
    return array.reduce(reducer, start)
}

    function reducer(accumulator, start) {
        return accumulator + start
    }

function reduceToAllTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
        if (!src[i]) return false
    }
    return true
}
    
function reduceToAnyTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
        if (src[i]) return true
    }
    return false
}