function bubbleSort(array) {
    if (array.length < 2) {
        return array;
    }

    for (let i = 0; i < array.length; i++) {
        var bigger; 
        var smaller;
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j+1]) {
                bigger = array[j]
                smaller = array[j+1]
                array[j] = smaller;
                array[j+1] = bigger;
            }
        }
    }
    return array;
}

// function swap(num1, num2) {
//     const first = num1;
//     const second = num2;
//     if (first > second) {
//         num1 = second;
//     }
// }