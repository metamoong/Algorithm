def solution(n, computers):
    isVisited = [False for _ in range(n)]
    
    cnt = 0
    def dfs(c):
        isVisited[c] = True;
        
        for next,isLinked in enumerate(computers[c]):
            if(not isVisited[next] and isLinked):
                dfs(next)
        
    for i in range (n):
        if not isVisited[i]:
            dfs(i)
            cnt+=1
            
    
    return cnt