export const isVowel = (str: string): boolean => {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
  return vowels.includes(str)
}

const swap = (xs: string[], left: number, right: number) =>
  ([xs[left], xs[right]] = [xs[right], xs[left]])

function reverseVowels(s: string): string {
  let left = 0
  let right = s.length - 1
  let xs = s.split("")

  while (left < right) {
    if (isVowel(xs[left]) && isVowel(xs[right])) {
      swap(xs, left, right)
      ++left
      --right
    }
    if (!isVowel(xs[left])) {
      ++left
    }
    if (!isVowel(xs[right])) {
      --right
    }
  }

  return xs.join("")
}

export function isSubsequence(s: string, t: string): boolean {
  // s should be a subsequence of t
  if (s === t) return true
  let j = 0
  for (let i = 0; i < t.length; i++) {
    if (s[j] === t[i]) {
      j++
    }
  }

  return j === s.length
}
