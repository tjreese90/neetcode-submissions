class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # We need to use a hash map to store data for what we have seen. 
        # data will be stored like {number: index}

        seen = {}

        # Steep 2: Loop through array of nums.
        for index, numvalue in enumerate(nums):

            # Step 3: Find the complement target number - current num in loop. 
            complement = target - numvalue

            # Step 4 have we seent he completement?
            if complement in seen:
                # we have found our target
                return [seen[complement], index]

            seen[numvalue] = index;
