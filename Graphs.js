//Implementing Graph Data structure
function vertex(label){
    this.label = label
}

function Graph(v){
    this.vertices = v
    this.edges =0
    this.marked = []
    this.queue = []
    this.adj = []
    this.toEdge=[]
    for(let i=0;i<this.vertices;++i){
        this.adj[i] =[]
        this.adj[i].push("")
    }

    this.addEdge=addEdge

    this.showGraph = showGraph
    this.marked = []
    for(let j=0;j<this.vertices;++j){
        this.marked[j]=false
    }
}

function addEdge(v,w){
    this.adj[v].push(w)
    this.adj[w].push(v)
    this.edges++;
}


function showGraph(){
    for(let k=0;k<this.vertices;++k){
        console.log(k + "->")
        for(let j=0;j<this.vertices;++j){
            if(this.adj[k][j] !== undefined){
                console.log(this.adj[k][j] + " ")
            }
        }
    }
}


function dfs(v){
    this.marked[v]=true
    if(this.adj[v] !== undefined){
        console.log(v)
    }
    for(let m in this.adj[v]){
        if(!(this.marked[v])){
            dfs(v)
        }
    }
}

//implement the breath-first search algorithm using queue abstraction....
function bfs(s) {
    this.queue.push(s)
    this.marked = true
    while (this.queue.length > 0) {
        let v = this.queue.shift()
        if (v === undefined) {
            console.log('Value of V', v)
        }
        for (let m in this.adj[v]) {
            if (!this.marked) {
                this.toEdge[m] = v
                this.marked = true
                this.queue.push(m)
            }
        }
    }
}

function pathTo(){
    let source=0
    if(!hasPathTo(v)){
        return false
    }
    let path =[]
    for(let i=v ;i!==source;i=this.toEdge(i)){
        path.push(i)
    }
    path.push(s)
    return path

}
function hasPathTo(v){
    return this.marked(v)

}
//Topological path
function topSort(){
    let visited =[]
    let stack=[]
    for(let k=0;k<this.vertices;++k){
        visited[k] = false
    }
    for(let i=0;i<this.vertices;++i){
        if(visited[i] === false){
            topSortHelper(i,visited, stack)
        }
    }
}

function topSortHelper(v, visited, stack){
     visited[v] = true
    for(let j in this.adj[v]){
        if(!visited[j]){
            topSortHelper(visited[j], visited, stack)
        }
    }
    stack.push()


}



g = new Graph(5);
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1,3);
g.addEdge(2,4);
g.showGraph();