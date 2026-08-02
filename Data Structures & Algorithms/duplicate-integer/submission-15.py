# Contains a duplicate have you seen this before = use hashmap
# We want to use hashmap because of quick look up to check a case to return a value. 

# HashSet = Set in Python. Only stores unique numbers. 0(1)

class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        
        seen = set() # Inttializing the set if we have seen it. 

        for num in nums: # Loop through each number in array.
            if num in seen: # If we have seen the number
               return True
            # If num is not in seen map add to seen map.
            seen.add(num)
        # If loop is done return false/    
        return False