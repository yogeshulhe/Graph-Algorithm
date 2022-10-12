const graph = {
    a : ['b','c'],
    b : ['d'],
    c : ['e'],
    d : ['f'],
    e : [],
    f : []
}

//Here we are using stack as array
const depthFirstPrint = (graph,source)=>{
    const stack = [source];

    while(stack.length>0){
        let current = stack.pop();
        console.log(current);
        for(let neighbour of graph[current]){
            stack.push(neighbour);
        }
    }
}

depthFirstPrint(graph, 'a');

console.log();
//Here we are using recursion
const depthFirstPrintRecursion = (graph, source)=>{
    console.log(source);
    for(let neighbour of graph[source]){
        depthFirstPrintRecursion(graph,neighbour);
    }
}

depthFirstPrintRecursion(graph,'a');