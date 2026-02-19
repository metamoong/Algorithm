import sys

input = sys.stdin.readline
sys.setrecursionlimit(150000)

N = int(input())
visited = [[-1] * N for _ in range(N)]
arr = [list(map(int, input().split())) for _ in range(N)]


def isV(i,j,h):
   return i>=0 and i<N and j>=0 and j<N and visited[i][j] != h and arr[i][j]>h

def dfs(i,j,h):
  visited[i][j] = h;
  if isV(i+1, j, h):
    dfs(i+1,j,h)
  if isV(i,j+1,h):
    dfs(i,j+1,h)
  if isV(i-1,j,h):
    dfs(i-1,j,h)
  if isV(i,j-1,h):
    dfs(i,j-1,h)
  return

result = 0
for h in range (101):
    cnt = 0
    for i in range (N):
        for j in range (N):
            if isV(i,j,h):
                cnt += 1
                dfs(i,j,h)
    if cnt > result:
       result = cnt


print(result)