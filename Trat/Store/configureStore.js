import { createStore, combineReducers } from 'redux'
import updateExp from './Reducers/expReducer'
import updateQuizLength from './Reducers/quizLengthReducer'
import updateQuizType from './Reducers/quizTypeReducer'


const rootReducer = combineReducers({
    updateExp,
    updateQuizLength,
    updateQuizType
});

export default createStore(rootReducer)