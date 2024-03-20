from sys import stdin
input = stdin.readline

n = int(input())

max_cur = [0 for _ in range (3)]
min_cur = [0 for _ in range (3)]

for _ in range(n):
  next = list(map(int,input().split()))
  n1,n2,n3 = next

  max_cur = [max(max_cur[0]+n1,max_cur[1]+n1),max(max_cur[0]+n2,max_cur[1]+n2,max_cur[2]+n2),max(max_cur[2]+n3,max_cur[1]+n3)]
  min_cur = [min(min_cur[0]+n1,min_cur[1]+n1),min(min_cur[0]+n2,min_cur[1]+n2,min_cur[2]+n2),min(min_cur[2]+n3,min_cur[1]+n3)]
 

print(max(max_cur),min(min_cur))
