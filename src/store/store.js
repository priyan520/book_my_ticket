import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../contslicer/slicer' ;

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})