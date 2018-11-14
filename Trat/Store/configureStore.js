import { createStore, combineReducers } from 'redux'
import updateExp from './Reducers/expReducers'
import updateQuizLength from './Reducers/quizLengthReducer'

const rootReducer = combineReducers({
    updateExp,
    updateQuizLength
});

export default createStore(rootReducer)