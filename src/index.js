
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix || matrix === []) {
    return []
  }
  let concatMatrix = []
  matrix.forEach((element, i) => {
    if (i % 2 === 0) {
      concatMatrix = concatMatrix.concat(element);
    } else {
      concatMatrix = concatMatrix.concat(element.reverse());  
    }
  });
  return concatMatrix
}
