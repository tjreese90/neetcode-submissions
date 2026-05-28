class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */

    // nums=[2,5,5,11]
    // target=10
 twoSum(nums, target) {
    const numMap = new Map(nums.map((val, index) => [val, index])); // value ➔ index
    for (let i = 0; i < nums.length; i++) {
        let valToFind = target - nums[i];
        if (numMap.has(valToFind) && numMap.get(valToFind) !== i) {
            return [i, numMap.get(valToFind)].sort(); // sort indexes
        }
    }
}

}

//Works, but is too slow:
// twoSum(nums, target) {
        
//         for (let i = 0; i <nums.length - 1; i++){
//             for (let j = 1; i < nums.length - i; j++){
//                 if (target === nums[i] + nums[j]){
//                     if (nums[i] > nums[j]){
//                         return [j, i];
//                     }else{
//                         return [i, j];
//                     }
//                 }
//             }
//         }
//     }

/*
The time complexity of this solution is O(N) because we iterate through the array once and use a hash map (Map) for constant-time lookups.
The space complexity is also O(N) since we store up to N elements in the map. This is significantly faster than the brute-force approach,
which is O(N²) due to its nested loops.
 */