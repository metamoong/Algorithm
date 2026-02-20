import sys
input = sys.stdin.readline

N = int(input())
arr = [list(map(int, input().split())) for _ in range (N)]
visited = [False for _ in range (N)]

ans = -1
def dfs(cur, cnt):
  global ans
  if cnt == N//2:
    t1 = 0
    t2 = 0
    for i in range(N):
      for j in range(N):
        if visited[i] and visited[j]:
          t1 += arr[i][j]
        elif not visited[i] and not visited[j]:
          t2 += arr[i][j]
    diff = abs(t1 - t2)
    if ans == -1 or diff < ans:
      ans = diff
    return
  for i in range(cur, N):
    if not visited[i]:
      visited[i] = True
      dfs(i, cnt+1)
      visited[i] = False
  

dfs(0,0)
print(ans)