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


//Optimized:

// class Solution {
//     /**
//      * Check if two strings are anagrams using character frequency counting.
//      *
//      * Time Complexity: O(n)
//      *   - We traverse both strings once.
//      * Space Complexity: O(1)
//      *   - Constant space for a fixed alphabet (26 letters for lowercase English).
//      *     If the alphabet were larger (e.g. Unicode), it would be O(k).
//      *
//      * @param {string} s
//      * @param {string} t
//      * @return {boolean}
//      */
//     isAnagram(s, t) {
//         // If lengths differ, they can't be anagrams.
//         if (s.length !== t.length) return false;

//         // Initialize a frequency counter for each character (a–z)
//         const freq = new Array(26).fill(0);
//         const base = 'a'.charCodeAt(0); // used to convert chars to indices

//         // Count characters in s and subtract characters in t
           // Each value is stroed and deleted from the same index, since length is the same if anagram each s added should eventually get deleted by a t. 
//         for (let i = 0; i < s.length; i++) {
//             freq[s.charCodeAt(i) - base]++;
//             freq[t.charCodeAt(i) - base]--;
//         }

//         // If all counts return to 0, the strings are anagrams
//         for (let count of freq) {
//             if (count !== 0) return false;
//         }

//         return true;
//     }
// }
