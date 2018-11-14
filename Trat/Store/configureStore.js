import { createStore, combineReducers } from 'redux'
import updateExp from './Reducers/expReducer'
import updateQuizLength from './Reducers/quizLengthReducer'
import updateQuizType from './Reducers/quizTypeReducer'
import selectTheme from "./Reducers/quizThemeReducer";


const rootReducer = combineReducers({
    updateExp,
    updateQuizLength,
    updateQuizType,
    selectTheme
});

export default createStore(rootReducer)