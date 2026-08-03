class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        # Hash map with custom key is solution, determining a way

        # Step 1: Create a dictionary where the default value is an empty list
        seen = defaultdict(list)

        for s in strs:
            # Step 2: Create a frequency array for the 26 lowercase letters
            count = [0] * 26
            
            for char in s:
                # Calculate the index (0 for 'a', 1 for 'b', etc.) and increment
                count[ord(char) - ord('a')] += 1

            # Step 3: Convert the list to a tuple so it can be a dictionary key
            seen[tuple(count)].append(s)
            # Step 4: Return just the grouped lists
        return list(seen.values())


