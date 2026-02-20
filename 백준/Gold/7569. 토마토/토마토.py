import sys
from collections import deque
input = sys.stdin.readline

M,N,H = map(int, input().split())
tomato = [[list(map(int,input().split())) for _ in range(N)]for _ in range(H)]
visited = [[[False] * M for _ in range(N)] for _ in range(H)]

queue = deque()

for k in range(H):
  for i in range(N):
    for j in range(M):
      if tomato[k][i][j] == 1:
        queue.append((k,i,j))

result = -1
while queue:
  size = len(queue)
  result += 1
  for _ in range(size):
    k,i,j = queue.popleft()
    if i+1 < N and tomato[k][i+1][j] == 0:
      tomato[k][i+1][j] = 1
      queue.append((k,i+1,j))
    if i-1 >=0 and tomato[k][i-1][j] == 0:
      tomato[k][i-1][j] = 1
      queue.append((k,i-1, j))
    if j+1 <M and tomato[k][i][j+1] == 0:
      tomato[k][i][j+1] = 1
      queue.append((k,i, j+1))
    if j-1 >=0 and tomato[k][i][j-1] == 0:
      tomato[k][i][j-1] = 1
      queue.append((k,i, j-1))
    if k-1 >=0 and tomato[k-1][i][j] ==0:
      tomato[k-1][i][j] =1
      queue.append((k-1,i,j))
    if k+1 <H and tomato[k+1][i][j] ==0:
      tomato[k+1][i][j] =1
      queue.append((k+1,i,j))

fail = False
for k in range(H):
  for i in range(N):
    for j in range(M):
      if tomato[k][i][j] == 0:
        fail = True
        break


if fail:
  print(-1)
else:
  print(result)