import { createStore, combineReducers } from 'redux'
import updateExp from './Reducers/expReducer'
import updateQuizLength from './Reducers/quizLengthReducer'
import updateQuizType from './Reducers/quizTypeReducer'
import selectTheme from "./Reducers/quizThemeReducer";
import levelUp from "./Reducers/lvlupReducer";
import updateExpMax from "./Reducers/expMaxReducer";
import updateCoins from "./Reducers/coinsReducer";


const rootReducer = combineReducers({
    updateExp,
    updateQuizLength,
    updateQuizType,
    selectTheme,
    levelUp,
    updateExpMax,
    updateCoins
});

export default createStore(rootReducer)