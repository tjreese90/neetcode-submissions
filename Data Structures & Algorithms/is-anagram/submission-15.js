class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if (s.length !== t.length){
            return false; // must be same size.
        }

        return s.split("").sort().join("") ===  t.split("").sort().join("")   
        
    }
}
