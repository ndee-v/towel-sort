
// You should implement your task here.


module.exports = function towelSort (matrix) {
  if (!matrix) {
    return []
  }

  return matrix.reduce((accum, elem, ind) => {
    if (ind % 2 === 0) {
      return accum.concat(elem)
    } else {
      return accum.concat(elem.reverse())
    }
  }, [])

}


