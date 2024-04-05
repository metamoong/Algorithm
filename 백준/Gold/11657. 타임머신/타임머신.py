import sys

input = sys.stdin.readline

N,M = map(int,input().split())
graph = [[] for _ in range (N+1)]
for i in range (M):
  A,B,C = map(int,input().split())
  graph[A].append((B,C))

memo = [float("inf") for _ in range (N+1)]
memo[1] = 0

for _ in range (N-1):
  for i,edges in enumerate(graph):
    if memo[i]==float("inf"):
      continue
    for e,c in edges:
      memo[e] = min(memo[e],c+memo[i]) 

# 음수 싸이클 찾기
hasCycle = False
for i,edges in enumerate(graph):
  if memo[i]==float("inf"):
    continue
  for e,c in edges:
    if c+memo[i]<memo[e]:
      hasCycle = True
    memo[e] = min(memo[e],c+memo[i]) 

if hasCycle:
  print(-1)
else:
  for idx in range (2,N+1):
    print(-1 if memo[idx]==float('inf') else memo[idx])