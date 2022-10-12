const graph ={
    a : ['b','c'],
    b : ['d'],
    c : ['e'],
    d : ['f'],
    e : [],
    f : []
}

const breadthFirstPrint = (source, graph)=>{
    let queue = [source];
    while(queue.length>0){
        let current = queue.shift();
        console.log(current);
        for(let neighbour of graph[current]){
            queue.push(neighbour);
        }
    }
}

breadthFirstPrint('a',graph);