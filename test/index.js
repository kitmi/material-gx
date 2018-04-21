import React from 'react';
import { render } from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { listMenuCreator, materialLayoutCreator, createTheme, SidebarController } from '../build';
import Button from 'material-ui/Button';
import menuRoutes from './fixture/routes';

const sidebarController = new SidebarController();

const ListMenu = listMenuCreator(2);
const MaterialLayout = materialLayoutCreator(240, 60);

const hist = createBrowserHistory();

const btnClick = () => { sidebarController.toggleSidebarMini(); };

const Home = ({ ...rest }) => (
    <MaterialLayout
        sidebar={<ListMenu routes={menuRoutes} indent={true} subheader="Menu" {...rest} />}
        sidebarController={sidebarController}
        header={
            <div>
                <Button onClick={btnClick}>Toggle Collapse</Button>
            </div>
        }
        content={<div>{switchRoutes(menuRoutes)}</div>}
    />
);

const indexRoutes = [{ path: '/', component: createTheme(Home, {}) }];

const switchRoutes = routes => (
    <Switch>
        {routes.map((route, i) => {
            if (route.redirectTo)
                return <Redirect from={route.path} to={route.redirectTo} key={route.path} />;
            if (route.subMenu) {
                return route.subMenu.map((prop, j) => {
                    return <Route path={prop.path} component={prop.component} key={prop.path} />;
                });
            }
            return <Route path={route.path} component={route.component} key={route.path} />;
        })}
    </Switch>
);

render(<Router history={hist}>{switchRoutes(indexRoutes)}</Router>, document.getElementById('app'));
