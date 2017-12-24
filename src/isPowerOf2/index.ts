// Time Complexity O(log N)
export function isPowerOf2(num: number): boolean {
  if (num === 1) return true
  if (num % 2) return false
  return isPowerOf2(num / 2)
}
