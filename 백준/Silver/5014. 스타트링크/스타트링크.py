import sys
from collections import deque
input = sys.stdin.readline

F, S, G, U, D = map(int, input().split())
visited = [False] * F
queue = deque()
queue.append(S)
visited[S-1] = True
result = -1
dist = -1
while queue:
  dist += 1
  size = len(queue)
  for i in range(size):
    cur = queue.popleft()
    if cur == G:
        result = dist
        break;
    if cur + U <= F and not visited[cur+U-1]:
        visited[cur+U-1] = True
        queue.append(cur+U)
    if cur - D > 0 and not visited[cur-D-1]:
        visited[cur-D-1] = True
        queue.append(cur-D)
  if result != -1:
     break


if result == -1:
  print("use the stairs")
else:
  print(result)