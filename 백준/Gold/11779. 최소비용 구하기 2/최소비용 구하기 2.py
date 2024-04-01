import sys
import heapq

input = sys.stdin.readline
n = int(input())
m = int(input())

graph = [[] for _ in range(n+1)]

for i in range(m):
  s,e,cost = map(int,input().split())
  graph[s].append((cost,e))

s,e = map(int,input().split())

paths = [-1 for _ in range (n+1)]
costs = [float("inf") for _ in range(n+1)]

q = [(0,s)]
costs[s] = 0

while q:
  cost,cur = heapq.heappop(q)
  if costs[cur] < cost:
    continue
  for c,node in graph[cur]:
    if costs[node]>c+cost:
      heapq.heappush(q,(c+cost,node))
      paths[node] = cur 
      costs[node] = c+cost

cur = e
answer = []

while cur!=s:
  answer.append(cur)
  cur = paths[cur]
answer.append(s)

answer.reverse()

print(costs[e])
print(len(answer))
print(' '.join(map(str,answer)))