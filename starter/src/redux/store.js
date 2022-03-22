import {configureStore} from '@reduxjs/toolkit'
import todoReducer from './todoSlice'
import { snackbarReducer } from 'react-redux-snackbar';

export default configureStore({
    reducer :{
        todos: todoReducer,
        snackbar: snackbarReducer 
    }
})