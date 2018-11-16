const initialState = {lvl: 0};

function levelUp(state = initialState, action) {
    let nextState;
    switch(action.type) {
        case 'LEVEL_UP':
            nextState = {
                ...state,
                lvl: state.lvl + action.value,
            };
            return nextState || state;

        default:
            return state
    }
}

export default levelUp