function bubbleSort(array) {
    if (array.length < 2) {
        return array;
    }

    let checkIndexes = array.length - 1

    for (let i = 0; i < array.length; i++) {

        for (let j = 0; j < checkIndexes; j++) {
          swap(array, j);
        }
        checkIndexes--;
    }
    return array;
}

function swap(array, index) {
  var bigger;
  var smaller;
  if (array[index] > array[index+1]) {
    bigger = array[index]
    smaller = array[index+1]
    array[index] = smaller;
    array[index+1] = bigger;
  }
}
