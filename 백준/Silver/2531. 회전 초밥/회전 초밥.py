import sys
from collections import deque
input = sys.stdin.readline

N,d,k,c = map(int,input().split())
chobap = [int(input()) for _ in range (N)]

eat = deque()
count = [0] * (d+1)
unique = 0
ans = 0

#초기 초밥
for i in range(k):
  eat.append(chobap[i])
  if count[chobap[i]] == 0:
    unique += 1
  count[chobap[i]] +=1

if count[c] ==0:
  ans = unique + 1
else:
  ans = unique


for i in range(k, N+k):
  r_target = eat.popleft()
  count[r_target]-=1
  if count[r_target] == 0:
    unique -= 1

  a_target = chobap[i%N]
  if count[a_target] == 0:
    unique += 1
  eat.append(a_target)
  count[a_target] += 1

  plus = 1 if count[c] == 0 else 0
  if unique + plus > ans:
    ans = unique + plus
  

print(ans)
