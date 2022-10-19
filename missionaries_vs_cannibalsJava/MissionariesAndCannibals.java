/**
 * main
 */

import StateManagement.BankState;
import StateManagement.Graph;
import java.util.*;

public class MissionariesAndCannibals {


    public static void main(String[] args) {
        Graph graph = new Graph();
        BankState rightBank = new BankState(3, 3, true);
        graph.addNodes(rightBank);
        // System.out.println(graph.get());
        // Set<String> solution = graph.dfs(rightBank);
        List<String> solution = graph.dfs(rightBank);
        System.out.println(solution.toString());
    }
}