function sumArrayNumbers(arr) {
  if (!Array.isArray(arr)) return undefined
  if (!arr.length) return 0

  return arr.reduce((acc, curr) => acc + curr, 0)
}

console.log(sumArrayNumbers(1));