
const graph = new Map();
const loads = [[1, 1], [0, 1], [0, 2], [1, 0], [2, 0]];
const initialState = "3 3 1"; // 3 missionaries 3 cannibals 1 boat on the left
const finalState = "0 0 0";

function tryLoad(state, load) {
    let stateArray = state.split(" ");
    if(stateArray[2] === "0") { // boat on the right
        stateArray[0] = parseInt(stateArray[0]) + load[0];
        stateArray[1] = parseInt(stateArray[1]) + load[1];
        stateArray[2] = 1
    } else if (stateArray[2] === "1") { // boat on the left
        stateArray[0] = parseInt(stateArray[0]) - load[0];
        stateArray[1] = parseInt(stateArray[1]) - load[1];
        stateArray[2] = 0
    }
    return stateArray.toString().replace(/,/g, " ");
}

function isValidState(state) {
    let stateArray = state.split(" ");
    if (parseInt(stateArray[0]) < 4 && parseInt(stateArray[1]) < 4 && parseInt(stateArray[0]) >= 0 && parseInt(stateArray[1]) >= 0 && parseInt(stateArray[0]) >= parseInt(stateArray[1])) return true;
    else return false;
}

function createCombinations(state) {
    let combinations = [];
    for (let i = 0; i < loads.length; i++) {
        const load = loads[i];
        const resultState = tryLoad(state, load);
        if (isValidState(resultState)) {
            combinations.push(resultState);
        }
    }
    return combinations;
}



function addNode(state) {
    if (!graph.has(state)) {
        const stateCombinations = createCombinations(state);
        graph.set(state, stateCombinations);
        // stateCombinations.forEach(combination => {addNode(combination)})
        for (let i = 0; i < stateCombinations.length; i++) {
            addNode(stateCombinations[i])
        }
    } else {
        return
    }
}

function dfs(initialState, visited = new Set()) {
    // console.log(initialState);
    visited.add(initialState);
    const nextStates = graph.get(initialState);
    for (let i = 0; i < nextStates.length; i++) {
        const state = nextStates[i];
        if (state === finalState) {
            console.log(visited);
            return;
        }
        if (!visited.has(state)) {
            dfs(state, visited)
        }
    }
}


addNode(initialState)
// console.log(graph)
dfs(initialState)

// console.log(tryLoad("3 3 1", loads[0])) 