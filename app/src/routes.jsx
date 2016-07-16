import { Route, browserHistory } from 'react-router';
//import { Provider } from 'react-redux';
import { ReactRouterSSR } from 'meteor/reactrouter:react-router-ssr';
import todoRoutes from 'TodoApp/client/routes';
import configureStore from 'TodoApp/client/configureStore';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

const networkInterface = createNetworkInterface('/graphql');
const client = new ApolloClient({
    networkInterface
});


let store;


const historyHook = browserHistory;

// Pass the state of the store as the object to be dehydrated server side
const dehydrateHook = () => store.getState();

// Take the rehydrated state and use it as initial state client side
//const rehydrateHook = state => initialState = state;

// Create a redux store and pass into the redux Provider wrapper
const wrapperHook = app => {
    store = configureStore(client);
    return <ApolloProvider store={store} client={client}>{app}</ApolloProvider>
};

const clientOptions = { historyHook, wrapperHook };
const serverOptions = { historyHook, dehydrateHook };

ReactRouterSSR.Run(todoRoutes, clientOptions, serverOptions);