class Solution {
    /**
     * Check if two strings are anagrams of each other.
     * 
     * Problem type: String algorithm (anagram check via sorting)
     * We know it's a string‐manipulation problem, and specifically an anagram check,
     * because we're verifying that two strings contain the exact same characters.
     * 
     * Time Complexity: O(n log n)
     *   - We sort both strings of length n, and sorting dominates at O(n log n).
     * Space Complexity: O(n)
     *   - We allocate two new arrays of length n when splitting the strings, 
     *     plus the space used by the sorting algorithm.
     *
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // Quick length check—if lengths differ, they can't be anagrams
        if (t.length !== s.length) {
            return false;
        }

        // Convert each string into an array of characters...
        // ...then sort them so that equal characters line up in order.
        const sSorted = s.split('').sort();
        const tSorted = t.split('').sort();

        // Compare the sorted arrays by converting to strings.
        // If they're identical, s and t are anagrams.
        return sSorted.toString() === tSorted.toString();
    }
}
