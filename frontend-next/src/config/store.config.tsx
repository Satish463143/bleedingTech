import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import createWebStorage from 'redux-persist/lib/storage/createWebStorage'
import { combineReducers } from '@reduxjs/toolkit'

import userReducer from '../reducer/user.reducer'
import { PageApi } from '../../components/api/page.api'
import { AuthApi } from '../../components/api/login.api'
import { ProjectApi } from '../../components/api/project.api'
import { TeamApi } from '../../components/api/team.api'
import { ServicesApi } from '../../components/api/services.api'
import { CaseStudiesApi } from '../../components/api/caseStudies.api'
import { ClientsApi } from '../../components/api/clients.api'
import { ContactApi } from '../../components/api/contact.api'
import { BlogApi } from '../../components/api/blog.api'

// Create a noop storage for SSR
const createNoopStorage = () => {
    return {
        getItem(_key: string) {
            return Promise.resolve(null)
        },
        setItem(_key: string, value: any) {
            return Promise.resolve(value)
        },
        removeItem(_key: string) {
            return Promise.resolve()
        },
    }
}

const storage = typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage()

// Persist configuration
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user'], // Only persist user state
}

// Combine all reducers
const rootReducer = combineReducers({
    user: userReducer,
    [PageApi.reducerPath]: PageApi.reducer,
    [AuthApi.reducerPath]: AuthApi.reducer,
    [ProjectApi.reducerPath]: ProjectApi.reducer,
    [TeamApi.reducerPath]: TeamApi.reducer,
    [ServicesApi.reducerPath]: ServicesApi.reducer,
    [CaseStudiesApi.reducerPath]: CaseStudiesApi.reducer,
    [ClientsApi.reducerPath]: ClientsApi.reducer,
    [ContactApi.reducerPath]: ContactApi.reducer,
    [BlogApi.reducerPath]: BlogApi.reducer,
})

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer)

const storeConfig = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
            },
        })
            .concat(PageApi.middleware)
            .concat(AuthApi.middleware)
            .concat(ProjectApi.middleware)
            .concat(TeamApi.middleware)
            .concat(ServicesApi.middleware)
            .concat(CaseStudiesApi.middleware)
            .concat(ClientsApi.middleware)
            .concat(ContactApi.middleware)
            .concat(BlogApi.middleware)
})

export const persistor = persistStore(storeConfig)
export default storeConfig