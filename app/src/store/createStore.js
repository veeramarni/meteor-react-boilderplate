import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import makeRootReducer from './reducers';


export default (initialState = {}, history) => {
    // ======================================================
    // Middleware Configuration
    // ======================================================
    const middleware = [thunk, routerMiddleware(history)]

    // ======================================================
    // Developer Tools
    // ======================================================
    if (__DEBUG__) {
        const devToolsExtension = windows.devToolsExtension;
        if (typeof devToolsExtension === 'function'){
            middleware.push(devToolsExtension());
        }
    }

    // ======================================================
    // Store Instantiation and HMR Setup
    // ======================================================
    const store = createStore(
        makeRootReducer(),
        initialState,
        applyMiddleware(...middleware)
    );


    return store;
}