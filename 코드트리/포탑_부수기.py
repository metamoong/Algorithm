from collections import deque

M,N,K = map(int,input().split())
hp = []

for _ in range (M):
    hp.append(list(map(int,input().split())))

recent = [[0 for _ in range (N)] for _ in range (M)]
alive_cnt = 0
for m in range (M):
    for n in range (N):
        if hp[m][n]>0:
            alive_cnt+=1

isVisited = [[False for _ in range (N)] for _ in range (M)]
move_d = [(0,1),(1,0),(0,-1),(-1,0)]
potan_d = [(1,0),(-1,0),(0,1),(0,-1),(1,1),(-1,1),(1,-1),(-1,-1)]

relatedToAttack = [[False for _ in range (N)] for _ in range (M)]

def bfs(i,j,ei,ej):
    memo = [[-1 for _ in range (N)] for _ in range (M)]
    q = deque()
    q.append((i,j))
    
    while q:
        curi,curj = q.popleft()
        if curi==ei and curj == ej:
            break
        for d in move_d:
            nexti,nextj = curi + d[0],curj+d[1]
            
            if nexti<0:
                nexti = M-1
            if nexti>=M:
                nexti = 0
            if nextj<0:
                nextj = N-1
            if nextj>=N:
                nextj = 0
            if memo[nexti][nextj]!=-1:
                continue
            if hp[nexti][nextj] == 0:
                continue       
            memo[nexti][nextj] = (curi,curj)
            q.append((nexti,nextj))

    if memo[ei][ej] == -1:
        return ((False,[]))

    #역추적
    attacked = []
    curi,curj = ei,ej
    while curi!= i or curj!=j:
        attacked.append((curi,curj))
        curi,curj = memo[curi][curj]
    attacked.append((curi,curj))

    return (True,attacked)


for now in range (K):
    if alive_cnt == 1:
        break
    
    isVisited = [[False for _ in range (N)] for _ in range (M)]
    relatedToAttack = [[False for _ in range (N)] for _ in range (M)]

    #부서지지 않은 약한 포탑 찾기
    min_hp = float("inf")
    min_loc = (-1,-1)

    for m in range (M):
        for n in range (N):
            if hp[m][n] == 0:
                continue
            if hp[m][n]<min_hp:
                min_hp = hp[m][n]
                min_loc = (m,n)
            elif hp[m][n]==min_hp:
                    if recent[min_loc[0]][min_loc[1]]<recent[m][n]:
                        min_hp = hp[m][n]
                        min_loc = (m,n)
                    elif recent[min_loc[0]][min_loc[1]]==recent[m][n]:
                        if min_loc[0]+min_loc[1]<m+n:
                            min_hp = hp[m][n]
                            min_loc = (m,n)
                        elif min_loc[0]+min_loc[1]==m+n:
                            if min_loc[1]<n:
                                min_hp = hp[m][n]
                                min_loc = (m,n)
    gi,gj = min_loc
    recent[gi][gj] = now+1
  
    #가장 강한 포탑 찾기
    max_hp = 0
    max_loc = (-1,-1)
    for m in range (M):
        for n in range (N):
            if m==gi and n== gj:
                continue
            if hp[m][n] ==0:
                continue
            if hp[m][n]>max_hp:
                max_hp = hp[m][n]
                max_loc = (m,n)
            elif hp[m][n]==max_hp:
                if recent[m][n]<recent[max_loc[0]][max_loc[1]]:
                    max_hp = hp[m][n]
                    max_loc = (m,n)
                elif recent[m][n]==recent[max_loc[0]][max_loc[1]]:
                    if m+n<max_loc[0]+max_loc[1]:
                        max_hp = hp[m][n]
                        max_loc = (m,n)
                    elif m+n==max_loc[0]+max_loc[1]:
                        if n<max_loc[1]:
                            max_hp = hp[m][n]
                            max_loc = (m,n)

    hp[gi][gj] += (M+N) # 공격력 증가

    #레이저 공격 시도
    hasRoute,attacked = bfs(min_loc[0],min_loc[1],max_loc[0],max_loc[1])

    if hasRoute:
        for idx,potap in enumerate(attacked):
            ai,aj = potap
            if ai==gi and aj==gj:
                continue
            hp[ai][aj]-= hp[gi][gj] if idx==0 else hp[gi][gj]//2

            if hp[ai][aj]<=0:
                hp[ai][aj] = 0
                alive_cnt -= 1;
    
    else:
        #포탄 공격
        attacked = []
        mi,mj = max_loc

        for d in potan_d:
            ati,atj = mi+d[0],mj+d[1]

            if ati<0:
                ati = M-1
            if ati>=M:
                ati = 0
            if atj<0:
                atj = N-1
            if atj>=N:
                atj = 0
     
            if hp[ati][atj]==0:
                continue
            if ati==gi and atj ==gj:
                continue
       
            attacked.append((ati,atj))
            hp[ati][atj]-= hp[min_loc[0]][min_loc[1]]//2

            if hp[ati][atj]<=0:
                hp[ati][atj] = 0
                alive_cnt -=1

        hp[max_loc[0]][max_loc[1]] -= hp[min_loc[0]][min_loc[1]]
        if hp[max_loc[0]][max_loc[1]]<=0:
            hp[max_loc[0]][max_loc[1]] = 0
            alive_cnt -=1

        attacked.append(max_loc)

    for pt in attacked:
        pti,ptj = pt
        relatedToAttack[pti][ptj] = True

    for m in range (M):
        for n in range(N):
            if hp[m][n] == 0 or (m==min_loc[0] and n==min_loc[1]):
                continue
            if relatedToAttack[m][n]:
                continue
            hp[m][n] += 1

answer = 0
for m in range (M):
    for n in range (N):
        if hp[m][n]>answer:
            answer = hp[m][n]

print(answer)

# 시간초과?
# 레이저 공격의 경로를 저장하기 위해 dfs를 사용했었는데 굳이 가지 않아도 되는 모든 경로를 가야 했음
# bfs + 역추적 으로 바꿨더니 해결됨