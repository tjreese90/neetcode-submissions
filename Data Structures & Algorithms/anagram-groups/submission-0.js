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
