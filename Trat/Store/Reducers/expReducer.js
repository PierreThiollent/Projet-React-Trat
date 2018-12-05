const initialState = {exp: 0};

function updateExp(state = initialState, action) {
    let nextState;
    switch(action.type) {
        case 'UPD_EXP':
            nextState = {
                ...state,
                exp: state.exp + action.value,
            };
            return nextState || state;
        case 'RESET_EXP':
            nextState = {
                ...state,
                exp: action.value,
            };
            return nextState || state;
        default:
            return state
    }
}

export default updateExp