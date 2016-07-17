import { createStore, applyMiddleware, combineReducers } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import todoApp from './reducers';
import ApolloClient, { createNetworkInterface } from 'apollo-client';


const networkInterface = createNetworkInterface('/graphql');


export const apolloClient = new ApolloClient({
    networkInterface
});


const configureStore = () => {
    const middlewares = [thunk, apolloClient.middleware()];
    const rootReducer = combineReducers({
        todoApp,
        apollo: apolloClient.reducer()
    });
    if (process.env.NODE_ENV !== 'production') {
        middlewares.push(createLogger());
    }

    return createStore(
        rootReducer,
        applyMiddleware(...middlewares)
    );
};

export default configureStore;
