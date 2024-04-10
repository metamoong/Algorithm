L,N,Q = map(int,input().split())

loc = [[-1,-1] for _ in range (N+1)]
size = [[-1,-1] for _ in range (N+1)]
health = [0 for _ in range (N+1)]
damage = [0 for _ in range (N+1)]
isAlive = [True for _ in range (N+1)]
pan = [[-1 for _ in range (L)] for _ in range (L)]
pan_state = []

for _ in range (L):
    row = list(map(int,input().split()))
    pan_state.append(row)

for i in range (N):
    r,c,h,w,k = map(int,input().split())
    for m in range (r-1,r-1+h):
        for n in range (c-1,c-1+w):
            pan[m][n] = i+1
        
    loc[i+1] = [r-1,c-1]
    size[i+1] = [h,w]
    health[i+1] = k


move_d = [(-1,0),(0,1),(1,0),(0,-1)]

for _ in range(Q):
    i,d = map(int,input().split())
    if not isAlive[i]:
        continue

    updated_pan = [[-1 for _ in range (L)] for _ in range (L)]
    updated_loc = [row[:] for row in loc]

    isMoveable = True
    hamjung = []
    isMoved = set()
    q = [i]
    while q:
        cur_gisa = q.pop()
        if cur_gisa in isMoved:
            continue

        isMoved.add(cur_gisa)
        r,c = updated_loc[cur_gisa]
        h,w = size[cur_gisa]

        if(r + move_d[d][0]>=0 and r + move_d[d][0]<L and c+move_d[d][1]>=0 and c+move_d[d][1]<L):
            updated_loc[cur_gisa] = [r + move_d[d][0],c+move_d[d][1]]

        for m in range (r,r+h):
            for n in range (c,c+w):
                nexti,nextj = m + move_d[d][0],n+move_d[d][1]

                if nexti<0 or nexti>=L or nextj<0 or nextj>=L or pan_state[nexti][nextj] == 2:
                    isMoveable = False
                    break
                if pan[nexti][nextj] !=-1 and pan[nexti][nextj]!=cur_gisa:
                    q.append(pan[nexti][nextj])
                if pan_state[nexti][nextj] == 1:
                    hamjung.append(cur_gisa)
                updated_pan[nexti][nextj] = cur_gisa
              
        
    if isMoveable:
        for n in range (L):
            for m in range (L):
                if pan[n][m] not in isMoved and pan[n][m]!=-1:
                    updated_pan[n][m] = pan[n][m]
    
        for gisa in hamjung:
            if gisa == i or not isAlive[gisa]:
                continue
            health[gisa] -= 1
            damage[gisa] += 1
            if health[gisa]<=0:
                isAlive[gisa] = False
                r,c = updated_loc[gisa]
                h,w = size[gisa]
                for m in range (r,r+h):
                    for n in range (c,c+w):
                        updated_pan[m][n] = -1

        pan = updated_pan
        loc = updated_loc

answer = 0
for i,dam in enumerate(damage):
    if isAlive[i]:
        answer+=dam   

print(answer)

# 놓쳤던 부분

# 기사를 옮길 때 범위 안에 기사를 모두 옮기면 된다고 생각했음. - 의사 코드 작성할 때부터 잘못 생각함
# 시간복잡도 너무 생각하지 말자,, 일단 구현하고 줄이던가 해야겠다. 
# 살아있는 기사의 데미지만 더해야 하는데 모두 더함 - 틀렸을 때 조건을 다시 보자.. 