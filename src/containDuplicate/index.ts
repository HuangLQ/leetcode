export function isContainDuplicate(arr: number[]) {
  const hash = {}

  for (let num of arr) {
    if (hash[num]) return true
    hash[num] = true
  }

  return false
}
