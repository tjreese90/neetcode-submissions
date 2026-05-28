// class Solution {
//     /**
//      * @param {number[]} nums
//      * @param {number} target
//      * @return {number[]}
//      */

//     // nums=[2,5,5,11]
//     // target=10
//  twoSum(nums, target) {
//     const numMap = new Map(nums.map((val, index) => [val, index])); // value ➔ index
//     for (let i = 0; i < nums.length; i++) {
//         let valToFind = target - nums[i];
//         if (numMap.has(valToFind) && numMap.get(valToFind) !== i) {
//             return [i, numMap.get(valToFind)].sort(); // sort indexes
//         }
//     }
// }

// }



//Time complexity. 
/*
The time complexity of this solution is O(N) because we iterate through the array once and use a hash map (Map) for constant-time lookups.
The space complexity is also O(N) since we store up to N elements in the map. This is significantly faster than the brute-force approach,
which is O(N²) due to its nested loops.
*/

// Algorithm Used. 
/* 
This solution uses a hash map to store numbers and their indices for constant-time lookups, enabling a fast one-pass check for the complement of each number.
It’s a classic example of a greedy + hash table approach. We know this by observing that it avoids nested loops and relies on immediate map checks to find a match.
*/


class Solution {
  /**
   * Find indices of two numbers whose sum equals targetSum.
   * @param {number[]} numbers
   * @param {number} targetSum
   * @return {number[]} [leftIndex, rightIndex] or []
   */
  twoSum(numbers, targetSum) {
    // Map each value to the first index where it appears
    const firstIndexByValue = new Map(); // value -> index

    for (let currentIndex = 0; currentIndex < numbers.length; currentIndex++) {
      const currentValue = numbers[currentIndex];
      const complement = targetSum - currentValue;

      // If we've already seen the needed complement, we have our pair
      if (firstIndexByValue.has(complement)) {
        const complementIndex = firstIndexByValue.get(complement);
        return [complementIndex, currentIndex];
      }

      // Record the earliest index for this value (keep first occurrence for stability)
      if (!firstIndexByValue.has(currentValue)) {
        firstIndexByValue.set(currentValue, currentIndex);
      }
    }

    // No pair found; return [] (or throw if the problem guarantees a solution)
    return [];
  }
}

// Why this is better

// Single pass instead of build-map + scan.

// No .sort() on the return.

// Handles duplicates naturally (e.g., [3,3], target 6).

// Complexity

// Time: O(n) (each element processed once; hash lookups are amortized O(1)).

// Space: O(n) (the map of seen values).