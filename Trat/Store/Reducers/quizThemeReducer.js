const initialState = {theme: []};

function selectTheme(state = initialState, action) {
    let nextState;
    switch (action.type) {
        case 'SELECT_THEME_CG':
            nextState = {
                ...state,
                theme: action.value,
            };
            return nextState || state;
        case 'SELECT_THEME_SCIENCE':
            nextState = {
                ...state,
                theme: action.value,
            };
            return nextState || state;
        case 'SELECT_THEME_RESET':
            nextState = {
                ...state,
                theme: action.value,
            };
            return nextState || state;
        default:
            return state
    }
}

export default selectTheme