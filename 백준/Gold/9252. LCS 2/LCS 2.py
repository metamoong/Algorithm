import sys
input = sys.stdin.readline

str1 = input().strip()
str2 = input().strip()
len1 = len(str1)+1
len2 = len(str2)+1

memo = [[0 for _ in range (len2)] for _ in range (len1)]
for i in range (1,len1):
  for j in range (1,len2):
    if str1[i-1]==str2[j-1]:
      memo[i][j] = memo[i-1][j-1] +1
    else:
      memo[i][j] = max(memo[i][j-1],memo[i-1][j])


i = len1-1
j = len2-1
maxStr = ""

while(memo[i][j]!=0):
  if(memo[i][j] == memo[i-1][j]):
    i = i-1
  elif memo[i][j] == memo[i][j-1]:
    j = j-1
  else:
    i = i-1
    j = j-1
    maxStr+=str1[i]


print(memo[len1-1][len2-1])
print(maxStr[::-1])