class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        # 1. Build the frequency map (your code)
        freqMap = {}
        for num in nums:
            if num in freqMap:
                freqMap[num] += 1
            else:
                freqMap[num] = 1
                
        # 2. Create the buckets (size of nums + 1 to account for 0 frequency)
        buckets = [[] for _ in range(len(nums) + 1)]
        
        # 3. Populate the buckets
        # .items() gives us both the key (num) and the value (count)
        for num, count in freqMap.items():
            buckets[count].append(num)
            
        # 4. Read backwards to find the top k
        res = []
        for i in range(len(buckets) - 1, 0, -1): # Loop backwards
            for num in buckets[i]:
                res.append(num)
                if len(res) == k:
                    return res