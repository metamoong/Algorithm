import sys
import heapq

input = sys.stdin.readline
N = int(input())
M = int(input())
graph = [[] for _ in range (N+1)]

for i in range (M):
  s,e,c = map(int,input().split())
  graph[s].append((c,e))

s,e = map(int,input().split())

memo = [float("inf") for _ in range (N+1)]
q = [(0,s)]
memo[s] = 0

while q:
  curCost,cur = heapq.heappop(q)
  if curCost > memo[cur]:
    continue
  for cost,next in graph[cur]:
    if memo[next]>curCost+cost:
      heapq.heappush(q,(curCost+cost,next))
      memo[next] = curCost+cost

print(memo[e])