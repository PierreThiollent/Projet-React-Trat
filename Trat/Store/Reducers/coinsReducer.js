const initialState = {coins: 8000};

function updateCoins(state = initialState, action) {
    let nextState;
    switch(action.type) {
        case 'UPD_COINS':
            nextState = {
                ...state,
                coins: state.coins + action.value,
            };
            return nextState || state;
        case 'RESET_COINS':
            nextState = {
                ...state,
                coins: state.coins - action.value,
            };
            return nextState || state;
        default:
            return state
    }
}

export default updateCoins