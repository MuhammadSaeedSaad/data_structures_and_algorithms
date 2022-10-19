package StateManagement;
import java.util.*;

public class BankState {
    private int missionaries;
    private int cannibals;
    private boolean boat;
    int[][] loads = {{1, 1}, {1, 0}, {0, 1}, {2, 0}, {0, 2}};
    Operations operations = new Operations();

    public BankState(int missionaries , int cannibals, boolean boat) {
        this.missionaries = missionaries;
        this.cannibals = cannibals;
        this.boat = boat;
    }
    
    public BankState get() {
        return this;
    }
    
    public int getMissionaries() {
        return missionaries;
    }
    
    public int getCannibals() {
        return cannibals;
    }
    
    public boolean getBoat() {
        return boat;
    }
    
    public void set(int missionaries, int cannibals, boolean boat) {
        this.missionaries = missionaries;
        this.cannibals = cannibals;
        this.boat = boat;
    }
    
    // important
    // toSring() => "3 3 1"
    public String toString() {
        String boatValue;
        if (boat) {
            boatValue = "1"; //right
        } else {
            boatValue = "0"; // left
        }
        return Integer.toString(missionaries) + " " + Integer.toString(cannibals) + " " + boatValue;
    }

    public BankState getOtherBank() {
        return new BankState(3-missionaries, 3-cannibals, !boat);
    }
    
    public int[] toArray() {
        int boatValue;
        if (boat) {
            boatValue = 1; //right
        } else {
            boatValue = 0; // left
        }
        int[] stateArray = {missionaries, cannibals, boatValue};
        return stateArray;
    }

    // return the BankState of the right bank
    public BankState moveBoat(int[] load) {
        int resultMissionaries;
        int resultCannibals;
        boolean resultBoat = !boat;     // maybe redundant
        if (boat) { // boat on the right
            resultMissionaries = missionaries - load[0];
            resultCannibals = cannibals - load[1];
        } else {
            resultMissionaries = missionaries + load[0];
            resultCannibals = cannibals + load[1];
        }
        return new BankState(resultMissionaries, resultCannibals, resultBoat);
    }


    // this method needs optimization
    public List<BankState> getPossibleStates() {
        List<BankState> possibleStates = new ArrayList<BankState>();
        for (int i = 0; i < loads.length; i++) {
            int[] load = loads[i];
            BankState resultState = moveBoat(load);
            if (operations.isValidBankState(resultState)) {
                possibleStates.add(resultState);
            }
        }
        return possibleStates;
    }
}
