function sumArray(array) {

  if (array == null || array.length == 0) {
    return 0
  }

  var min = array[0], max = array[0], sum = 0
  array.forEach(function(element) {
    if (min > element) {
      min = element
    }

    if (max < element) {
      max = element
    }

    sum += element
  })

  return sum - min - max
}

module.exports = sumArray