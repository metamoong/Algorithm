import sys

input = sys.stdin.readline

N = int(input())
data = list(map(int, input().split())) # 왼쪽에 있는 나보다 키가 큰 사람의 수
cur_state = [0 for i in range(N)] # 현재 나보다 큰 사람의 수

result = []
for i in range(N):
  next = -1
  for j in range(N):
    if cur_state[j] == data[j]:
      if next > j+1 or next == -1:
        next = j+1
  for j in range(N):
    if j+1 < next:
      cur_state[j] += 1
    elif j+1 == next:
      cur_state[j] = N
  
  result.append(next)

print(' '.join(str(item) for item in result))


# 4
# 2 1 1 0
# 1 2 3 4

# 앞에 있는 큰 숫자의 개수가 현재 상태와 같은 애들 중 숫자가 작은 것