import {configureStore} from '@reduxjs/toolkit'
import { QuestionReducer } from './reducers/questions'
import { ProgressReducer } from './reducers/progress'
import { TimeReducer } from './reducers/time'

export const  Store = configureStore({
reducer: {
    questions: QuestionReducer,
    progress: ProgressReducer,
    time: TimeReducer
}
})