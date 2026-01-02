import sys
input = sys.stdin.readline

N = int(input())

max_w = []
for i in range (N):
    max_w.append(int(input()))

max_w.sort(reverse=True)
result = 0
for i in range(N):
    cnt = i+1
    cur_max = max_w[cnt-1] * cnt
    if result < cur_max:
        result = cur_max

print(result)
