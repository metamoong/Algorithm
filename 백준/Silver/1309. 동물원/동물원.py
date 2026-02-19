import sys
input = sys.stdin.readline

N = int(input())
ans = [0] * 2
ans[0] = 1
ans[1] = 2

for i in range (N-1):
  n1, n2 = ans
  ans[0] = n1 + n2
  ans[1] = (n2//2 + n1) * 2

print((ans[0] + ans[1])%9901)