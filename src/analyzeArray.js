function analyzeArray(arr) {
  return {
    average: getAverage(arr),
    min: getMin(arr),
    max: getMax(arr),
    length: arr.length,
  };
}

function getAverage(arr) {
  if (arr.length === 0) return null;
  return arr.reduce((acc, value, i) => (acc * i + value) / (i + 1));
}

function getMin(arr) {
  if (arr.length === 0) return null;
  return arr.reduce((acc, val) => (val < acc ? val : acc));
}

function getMax(arr) {
  if (arr.length === 0) return null;
  return arr.reduce((acc, val) => (val > acc ? val : acc));
}

module.exports = analyzeArray;
