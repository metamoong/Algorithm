function solution(sizes) {
    let short_max,long_max;
    sizes.forEach((size)=>{
        let short,long;
        if(size[0]>size[1]){
            short = size[1];
            long = size[0];
        }else{
            short = size[0];
            long = size[1];
        }
        if(short_max<short||short_max === undefined) short_max = short;
        if(long_max<long||long_max === undefined) long_max = long;
    });

    return short_max*long_max;
}