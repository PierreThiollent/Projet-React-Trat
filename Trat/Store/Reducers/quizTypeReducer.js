const initialState = {quizType: ""};

function updateQuizType(state = initialState, action) {
    let nextState;
    switch(action.type) {
        case 'UPD_TYPE_PREMIUM':
            nextState = {
                ...state,
                quizType:   action.value,
            };
            return nextState || state;
        case 'UPD_TYPE_SIMPLE':
            nextState = {
                ...state,
                quizType:  action.value,
            };
            return nextState || state;
        case 'UPD_TYPE_GEOLOC':
            nextState = {
                ...state,
                quizType:  action.value,
            };
            return nextState || state;
        case 'UPD_TYPE_RESET':
            nextState = {
                ...state,
                quizType:  action.value,
            };
            return nextState || state;
        default:
            return state
    }
}

export default updateQuizType