const s = [5, 7, 2];
function editInPlace() {
  return s.sort((a, b) => a - b)
}
editInPlace();