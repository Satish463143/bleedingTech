import { configureStore } from '@reduxjs/toolkit'

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

const storeConfig = configureStore({
    reducer: {
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
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
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

export default storeConfig