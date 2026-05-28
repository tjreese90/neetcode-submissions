class Solution {

    //Approach: 

    // I need a data structre that stroes data, add data and allows
    // me to quickly look up data to check if it already exist.
    // Return trus if so.

    //DS: Maps
    //Reason: I believe maps are good for storing data, and lookup.
    // each check.


    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        const hasSeenNumMap = new Map();

        for (let i = 0; i < nums.length; i++){
            if (hasSeenNumMap.has(nums[i])){
                return true
            }else{
                hasSeenNumMap.set(nums[i], i);
            }
        }
        return false;
    }
}
