class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    

    //Input: [1,2,3,4,5]
    
    // Rules:
    // If a value in the arrays shows more than once return true, otherwise return false.

    // Output:
    // Boolean: True or Flase depending on rule. 

    hasDuplicate(nums) {
        const hasSeen = new Set();
        let output = false;

        nums.forEach((num) => {
            console.log(num);
            if (hasSeen.has(num)){
                output = true;
            }else{
                console.log(num + ' being added')
                hasSeen.add(num);
            }
        });

        return output; 
    }
}
