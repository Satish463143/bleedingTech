import { configureStore } from '@reduxjs/toolkit'

import userReducer from '../reducer/user.reducer'

const storeConfig = configureStore({
    reducer: {
        user: userReducer,
    },
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware()   

})

export default storeConfig