import {configureStore} from '@reduxjs/toolkit'
import { QuestionReducer } from './reducers/questions'

export const  Store = configureStore({
reducer: {
    questions: QuestionReducer
}
})