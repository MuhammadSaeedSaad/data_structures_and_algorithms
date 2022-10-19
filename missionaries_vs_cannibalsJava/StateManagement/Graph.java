package StateManagement;
import java.util.*;

public class Graph {
    Map<String , List<BankState>> graph = new HashMap<String, List<BankState>>();
    List<String> visited = new ArrayList<String>();

    public Map<String, List<BankState>> get() {
        return graph;
    }

    public void addNodes(BankState state) {
        if (!graph.containsKey(state.toString())) {
            List<BankState> possibleStates = state.getPossibleStates();
            graph.put(state.toString(), possibleStates);
            if (possibleStates.size() > 0) {
                for (int i = 0; i < possibleStates.size(); i++) {
                    addNodes(possibleStates.get(i));
                }
            }
        }
        else {
            return;
        }
    }


    public void dfs(BankState state) {
        visited.add(state.toString());
        // System.out.println(state.toString());
        List<BankState> nextStates = graph.get(state.toString());
        for(int i = 0; i < nextStates.size(); i++) {
            BankState nextState = nextStates.get(i);
            if (nextState.toString() == "0 0 0") {
                return;
            } 
            if (!visited.contains(nextState.toString())) {
                dfs(nextState);
            }
        }
    }

    public List<String> getVisited() {
        return visited;
    }
}
