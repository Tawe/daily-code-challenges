import heapq
from collections import defaultdict
from typing import Any, List

class Solution:
    def minimumCost(self, nums: List[int], k: int, dist: int) -> int:
        target_count = k - 1
        window_size = dist + 1
        initial_window = nums[1 : dist + 2]
        L = []
        R = []
        sorted_window = sorted(initial_window)
        current_sum = 0
        
        for x in sorted_window[:target_count]:
            heapq.heappush(L, -x)
            current_sum += x
            
        for x in sorted_window[target_count:]:
            heapq.heappush(R, x)
            
        min_sum = current_sum
        
        out_map_L = defaultdict[Any, int](int)
        out_map_R = defaultdict[Any, int](int)
        
        def clean_heap(heap, out_map, is_max_heap):
            while heap:
                val = -heap[0] if is_max_heap else heap[0]
                if out_map[val] > 0:
                    out_map[val] -= 1
                    heapq.heappop(heap)
                else:
                    break

        n = len(nums)
        for i in range(1, n - window_size):
            out_elem = nums[i]
            in_elem = nums[i + window_size]
            
            clean_heap(L, out_map_L, True)
            
            if L and out_elem <= -L[0]:
                current_sum -= out_elem
                out_map_L[out_elem] += 1
                need_refill = True
            else:
                out_map_R[out_elem] += 1
                need_refill = False
            
            clean_heap(L, out_map_L, True)
            
            if L and in_elem < -L[0]:
                heapq.heappush(L, -in_elem)
                current_sum += in_elem
            else:
                heapq.heappush(R, in_elem)

            if need_refill and (not L or in_elem >= -L[0]): 
                clean_heap(R, out_map_R, False)
                if R:
                    move = heapq.heappop(R)
                    heapq.heappush(L, -move)
                    current_sum += move
            
            elif not need_refill and L and in_elem < -L[0]: 
                clean_heap(L, out_map_L, True)
                move = -heapq.heappop(L)
                heapq.heappush(R, move)
                current_sum -= move

            if current_sum < min_sum:
                min_sum = current_sum
                
        return nums[0] + min_sum

solution = Solution()
print(solution.minimumCost(nums=[1, 3, 2, 6, 4, 2], k=3, dist=3))