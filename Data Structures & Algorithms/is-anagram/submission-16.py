# 

class Solution:
    def isAnagram(self, s: str, t: str) -> bool:

        # Create a Frequency couting hash map, ensure same  return true or false

        # Check if strings are same size, early check to prevent uncessary work.
        if len(s) != len(t):
            return False
        
        # Create the dictionary for frequency. 
        counts = {} #dic is an obj basically in pythong. 
        
        # loop through  string lenght
        # Add and substract letters based on each string from the count dic
        # if dic empty we confirmed all chars string 1 match string 2.
        for i in range(len(s)):
            counts[s[i]] = counts.get(s[i], 0) + 1 # counts[0] = counts.get if exist + 1
            counts[t[i]] = counts.get(t[i], 0) - 1 # counts[0] = counts.get if exist - 1
        
        for count in counts.values():
             # we are getting the vaules from dict if any are not 0 false
             if count != 0:
                return False
                
        return True
    