function split(arr) {
    var firstHalf = arr.slice(0, Math.ceil((arr.length/2)))
    var secondHalf = arr.slice(Math.ceil((arr.length/2)))

    return [firstHalf, secondHalf];
}

function merge(array) {
    /* your code here */
    return array.reduce((acc, val) =>
        acc.concat(val),[]);
  }