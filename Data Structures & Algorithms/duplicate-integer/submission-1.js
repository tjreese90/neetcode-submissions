class Solution {

    /**
     * Determines if the input array contains any duplicates.
     * 
     * Approach:
     * Use a `Map` to keep track of numbers we've seen so far. 
     * As we iterate through the array, we check if the number already exists in the map.
     * If it does, we've found a duplicate and return true.
     * If not, we store the number in the map and continue.
     *
     * Time Complexity: O(n)
     * - We traverse the array once, and each lookup/insertion in the map is O(1) on average.
     *
     * Space Complexity: O(n)
     * - In the worst case (no duplicates), we store all `n` elements in the map.
     *
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const seen = new Map();

        for (let i = 0; i < nums.length; i++) {
            if (seen.has(nums[i])) {
                return true;
            } else {
                seen.set(nums[i], true);
            }
        }
        return false;
    }
}


// When numbers roam in list so wide,
// I build a map to check inside.
// Each step I ask, “Have I seen you?”
// If yes, then truth — the duplicate's true!

// If no, I mark it, hold it fast,
// And keep on walking till the last.
// No match? Then false, the list is clean,
// No echoes in this number stream.

// So when in doubt, remember this rhyme:
// Use a map and save some time!