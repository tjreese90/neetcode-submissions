class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */

    // Input: [1,2,3,4,5] , target: 5

    // Rules: 
    // Return array indices that sum to target number. 

    // Output: [1,2] 
    // Reason 1 and 2 are 2 + 3, whihc equal 5 same as our target. 
    
    // notes: For each number nums[i] what number would I need tp reach target.


    twoSum(nums, target) {
        
        // Map: number -> index where we first saw it. 
        const seenMap = new Map();

        for (let i = 0; i < nums.length; i++) {
            // Find the number we need to reach target
            let complement = target - nums[i];
            
            // cjecl of we've a;ready seen that complement
            if (seenMap.has(complement)) {
                // return the ealier index first than, we use .get to get vaule of key. 
                return [seenMap.get(complement), i];
            };

            seenMap.set(nums[i], i); // num and index saved as value for key of num.
        }
    }
}
