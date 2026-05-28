class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */

    // My understanding:

    // We are given some strings in an array, we need to group all
    // anagrams together in a sublist(array within array). 

    // so for every string we need to check the array for any strings that
    // has all the same charaters and push or join them into a sub array, return
    // entire subarray.

    groupAnagrams(strs) {
        

        // We need a map that will group our anagrams. 
        const anagramGroup = new Map();

        for (let str of strs){ 
            
            let sortedStringKey = str.split("").sort().join(""); 

            if (!anagramGroup.has(sortedStringKey)){
                anagramGroup.set(sortedStringKey, []); 
            }

            anagramGroup.get(sortedStringKey).push(str);

        }

        return Array.from(anagramGroup.values());

    }
}
