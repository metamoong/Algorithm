import heapq

def solution(scoville, K):
    cnt = 0
    heapq.heapify(scoville)   
    
    while scoville[0]<K:
        try:
            mixed = heapq.heappop(scoville) + heapq.heappop(scoville)*2
        except IndexError:
            return -1
        
        heapq.heappush(scoville,mixed)
        cnt+=1


    
    return cnt