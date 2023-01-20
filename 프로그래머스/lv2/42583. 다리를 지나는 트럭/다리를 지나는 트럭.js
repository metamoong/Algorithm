function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    const q = truck_weights.map(truck=>{
        return{ 
            weight : truck,
            loc:0,};
    });
    const bridge = [];
    
    while(q.length>0||bridge.length>0){
        time +=1;

        if(bridge.length>0&&bridge[0].loc === bridge_length){
            bridge.shift();
        }
        let weightSum = bridge.reduce((acc,value)=>acc+value.weight,0);
        if(q.length>0&&q[0].weight+weightSum<=weight){
            bridge.push(q.shift());
        }
        bridge.forEach((truck)=>{truck.loc +=1});
          
    }
    
    
    
    return time;
}