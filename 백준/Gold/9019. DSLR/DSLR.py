import sys
from collections import deque

input = sys.stdin.readline

def printString(A,B):
  memo = [-1 for _ in range(10000)]
  q = deque()
  q.append(A)

  while len(q)>0:
    cur = q.popleft()
    if cur == B:
      break
    if memo[(cur*2)%10000]==-1:
      memo[(cur*2)%10000] = ["D",cur]
      q.append((cur*2)%10000)
    if memo[(cur-1+10000)%10000] == -1:
      memo[(cur-1+10000)%10000] = ["S",cur]
      q.append((cur-1+10000)%10000)

    s = f'{cur:04}'
    rotatedLeft = int(s[1:]+s[0])
    rotatedRight = int(s[-1]+s[:-1])
    if memo[rotatedLeft]==-1:
      memo[rotatedLeft] = ["L",cur]
      q.append(rotatedLeft)
    if memo[rotatedRight]==-1:
      q.append(rotatedRight)
      memo[rotatedRight] = ["R",cur]
  
  cur = B
  answer = ""
  while(cur!=A):
    answer+=memo[cur][0]
    cur = memo[cur][1]

  print(answer[::-1])

T = int(input())
for i in range (T):
  A,B = map(int,input().split())
  printString(A,B)
