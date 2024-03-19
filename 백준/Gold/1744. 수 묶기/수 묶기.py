n = int(input())

input = [int(input()) for _ in range(n)]

minus = []
plus = []
for num in input:
  if num>0:
    plus.append(num)
  else:
    minus.append(num)

plus.sort(reverse=True)
minus.sort()

sum = 0
i = 0
while(i<len(plus)):
  if i+1<len(plus) and plus[i]*plus[i+1] > plus[i]+plus[i+1]:
    sum+= plus[i]*plus[i+1]
    i+=2
  else:
    sum+=plus[i]
    i+=1

i = 0
while(i<len(minus)):
  if i+1<len(minus) and minus[i]*minus[i+1] > minus[i]+minus[i+1]:
    sum+= minus[i]*minus[i+1]
    i+=2
  else:
    sum+=minus[i]
    i+=1  

print(sum)