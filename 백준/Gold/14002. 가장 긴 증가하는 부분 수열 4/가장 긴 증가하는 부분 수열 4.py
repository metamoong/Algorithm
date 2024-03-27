from sys import stdin
input = stdin.readline

N = int(input())
nums = list(map(int,input().split()))

memo = [1 for _ in range (N)]

for i in range(1,N):
  for j in range(i):
    if(nums[i]>nums[j]):
      memo[i] = max(memo[i],memo[j]+1)

maxLen = max(memo)
answer = []

for i in range(N-1,-1,-1):
  if memo[i] == maxLen:
    answer.append(nums[i])
    maxLen-=1


answer.reverse()
print(len(answer))
print(' '.join(map(str,answer)))