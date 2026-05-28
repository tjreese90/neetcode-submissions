class Solution {
    /**
     * Checks whether two strings are anagrams (i.e. contain the same characters in any order).
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // If lengths differ, they can’t possibly be anagrams
        if (t.length !== s.length) {
            return false;
        }
        
        // Convert each string into an array of characters,
        // then sort that array lexicographically.
        // Sorting places identical characters in the same relative order.
        const sSort = s.split('').sort();
        const tSort = t.split('').sort();

        // Compare the two sorted arrays by converting them back to strings.
        // If all characters match in order, the originals were anagrams.
        return sSort.toString() === tSort.toString();
    }
}
