const initialState = {quizLength: 0};

function updateQuizLength(state = initialState, action) {
    let nextState;
    switch(action.type) {
        case 'UPD_LENGTH_5':
            nextState = {
                ...state,
                quizLength:   action.value,
            };
            return nextState || state;
        case 'UPD_LENGTH_10':
            nextState = {
                ...state,
                quizLength:  action.value,
            };
            return nextState || state;
        case 'UPD_LENGTH_15':
            nextState = {
                ...state,
                quizLength:  action.value,
            };
            return nextState || state;
        case 'UPD_LENGTH_RESET':
            nextState = {
                ...state,
                quizLength:  action.value,
            };
            return nextState || state;

        default:
            return state
    }
}

export default updateQuizLength