function createArray(startValue, endValue) {
    let array = []
    array.push(startValue)

    for(let i = startValue+1; i < endValue; i++) {
    array.push(i)

    }
    array.push(endValue)

    return array
}




let arr = createArray(10, 20);
console.log(arr); // [2,3,4,5,6,7,8,9]