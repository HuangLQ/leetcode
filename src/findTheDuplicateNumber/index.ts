export function findDuplicate(nums: number[]) {
  const hash = []

  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]]) return nums[i]
    hash[nums[i]] = true
  }
}
