import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';

const AppContainer = (store) => (

    <Provider store={store}>
        <App />
    </Provider>
);

export default AppContainer;