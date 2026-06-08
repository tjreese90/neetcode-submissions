class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */

    // Create a map of char, amount, indexes. use to rebuild the str with decoder.
    encode(strs) {
        let encoded = ""; 

        for (let str of strs){
            encoded += str.length + '#' + str; 
        }

        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {

        let decoded = [];

        let i = 0;

        while (i < str.length) {
            let j = i; 

            while (str[j] !== "#"){
                j++;
            }

            let length = parseInt(str.substring(i, j) , 10)

            let word = str.substring(j + 1, j + 1 + length);

            decoded.push(word);

            i = j + 1 + length; 
        }


        return decoded; 

    }
}
