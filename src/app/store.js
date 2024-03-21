// configure our store here
import { configureStore } from '@reduxjs/toolkit';
import chefReducer from '../features/chef/chefSlice';
import clientReducer from '../features/client/clientSlice';
import userReducer from '../features/user/userSlice';
// import customerReducer from '../features/customer/customerSlice';

// logger middleware
import { createLogger } from 'redux-logger';
const logger = createLogger();

const store = configureStore({
    reducer: {
        chef: chefReducer,
        cli: clientReducer,
        user: userReducer,
        // customer: customerReducer
    },
    middleware: (defaultMiddleware) => defaultMiddleware().concat(logger)
})

export default store;