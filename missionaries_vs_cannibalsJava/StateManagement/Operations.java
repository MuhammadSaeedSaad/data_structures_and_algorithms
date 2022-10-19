package StateManagement;
// import java.util.Stack;

// import StateManagement.BankState;

public class Operations {
    int[][] loads = {{1, 1}, {1, 0}, {0, 1}, {2, 0}, {0, 2}};

    // public BankState moveBoat(BankState leftState, int[] load) {
    //     int resultMissionaries;
    //     int resultCannibals;
    //     if (leftState.getBoat()) {
    //         resultMissionaries = leftState.getMissionaries() - load[0];
    //         resultCannibals = leftState.getCannibals() - load[1];
    //     } else {
    //         resultMissionaries = leftState.getMissionaries() + load[0];
    //         resultCannibals = leftState.getCannibals() + load[1];
    //     }
    //     return new BankState(resultMissionaries, resultCannibals, !leftState.getBoat());
    // }

    public boolean isValidBankState(BankState state) {
        int missionaries = state.getMissionaries();
        int cannibals = state.getCannibals();
        // if (cannibals == 0 && (missionaries != 3 || missionaries != 0)) {
        //     return false;
        // }
        if (missionaries < 4 && cannibals < 4 && missionaries >= 0 && cannibals >= 0) {
            // if ((missionaries == 3 && cannibals == 0) || (missionaries == 0 && cannibals == 3)) {
            //     return true;
            // } 
            // if (missionaries >= cannibals && state.getOtherBank().getMissionaries() >= state.getOtherBank().getCannibals()) {
            //     if ((missionaries > 0 && cannibals == 0)) {
            //         return false;
            //     }
            //     else {
            //         return true;
            //     }
            // }
            // else return false;
            // // if ((state.getOtherBank().getMissionaries() >= state.getOtherBank().getCannibals() && missionaries >= cannibals) || ((missionaries == 3 && cannibals == 0) || missionaries == 0 && cannibals == 3)) {
            // //     return true;
            // // } else return false;


            // if (state.getBoat()) {
            //     if (missionaries >= cannibals || (missionaries == 3 && cannibals == 0) || (missionaries == 0 && cannibals == 3)) {
            //         return true;
            //     } else return false;
            // } else {
            //     if (state.getMissionaries() >= state.getCannibals() || (missionaries == 3 && cannibals == 0) || (missionaries == 0 && cannibals == 3)) {
            //         return true;
            //     } else return false;
            // }

            // if ((missionaries == 3 && cannibals == 0) || (missionaries == 0 && cannibals == 3) || (missionaries == 0 && cannibals == 0)) {
            //     return true;
            // }
            // if (missionaries > 0 && cannibals > 0) {
                if ((missionaries >= cannibals || missionaries == 0 || cannibals == 0) && !(missionaries > 0 && cannibals > 0 && missionaries+cannibals == 3)) return true;
                else return false;
            // } else return false;

        }
        else {
            return false;
        }
    }


    // // this method needs optimization
    // public BankState[] getPossibleStates(BankState state) {
    //     // Stack<BankState> possibleStates = new Stack<BankState>();
    //     BankState[] possibleStates = new BankState[loads.length];
    //     for (int i = 0; i < loads.length; i++) {
    //         int[] load = loads[i];
    //         BankState resultState = moveBoat(state, load);
    //         if (isValidBankState(resultState)) {
    //             possibleStates[i] = resultState;
    //         }
    //     }
    //     return possibleStates;
    // }
}
