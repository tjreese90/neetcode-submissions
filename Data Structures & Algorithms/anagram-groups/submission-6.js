class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groupAnagramMap = new Map();

        for (let str of strs) {
            // Sort the string to form the key
            const key = str.split('').sort().join('');

            // If key doesn't exist yet, initialize with empty array
            if (!groupAnagramMap.has(key)) {
                groupAnagramMap.set(key, []);
            }

            // Push the original string into the group
            groupAnagramMap.get(key).push(str);
        }

        // Return all grouped anagram arrays
        return [...groupAnagramMap.values()];
    }
}


// Time Complexity
/*
The time complexity is O(N × K log K) because we sort each of the N strings (of average length K) to group them by their anagram signature.
 The space complexity is O(N × K) since we store all N strings and their grouped keys in memory.
 Sorting dominates the time, while storing the result dominates the space.
*/

// Algorithm
/* 
This algorithm uses a hash map to group strings by their sorted character signature, which uniquely identifies anagrams. 
It's a frequency bucketing approach where sorting acts as a normalized form to group words efficiently.
We know it's a hash-based solution because it uses a Map with sorted strings as keys to collect all matching anagrams.
*/