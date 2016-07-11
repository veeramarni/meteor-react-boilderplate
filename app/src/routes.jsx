import { Route } from 'react-router';
import { ReactRouterSSR } from 'meteor/reactrouter:react-router-ssr';
import ideRoutes from 'IDEApp/client/routes';

ReactRouterSSR.Run(
    <Route>
        {ideRoutes}
    </Route>
);