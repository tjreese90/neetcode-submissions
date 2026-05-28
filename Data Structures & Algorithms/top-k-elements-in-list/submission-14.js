class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const numMap = new Map();

        // Count the frequency of each number
        for (const num of nums) {
            numMap.set(num, (numMap.get(num) || 0) + 1);
        }

        // Sort entries by frequency and take top k
        return [...numMap.entries()]
            .sort((a, b) => b[1] - a[1]) // sort by frequency descending
            .slice(0, k)
            .map(entry => entry[0]); // return only the numbers
    }

}
