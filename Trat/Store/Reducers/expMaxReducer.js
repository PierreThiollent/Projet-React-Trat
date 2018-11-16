const initialState = {expMax: 100};

function updateExpMax(state = initialState, action) {
    let nextState;
    switch(action.type) {
        case 'UPD_EXP_MAX':
            nextState = {
                ...state,
                expMax: state.expMax * action.value,
            };
            return nextState || state;
        default:
            return state
    }
}

export default updateExpMax