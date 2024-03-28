import sys
from collections import deque

input = sys.stdin.readline

N,K = map(int,input().split())
memo = [-1 for _ in range (100001)]

q = deque()
q.append(N)

while(len(q)>0):
  cur = q.popleft()

  if cur == K:
    break;
  if cur+1<=100000 and memo[cur+1]==-1:
    q.append(cur+1)
    memo[cur+1] = cur
  if(cur-1>=0 and memo[cur-1]==-1):
    q.append(cur-1)
    memo[cur-1] = cur
  if(2*cur<=100000 and memo[2*cur]==-1):
    q.append(cur*2)
    memo[2*cur] = cur

cur = K
path = []
while cur!=N:
  path.append(cur)
  cur = memo[cur]
path.append(N)


path.reverse()
print(len(path)-1)
print(" ".join(map(str,path)))