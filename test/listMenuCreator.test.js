import React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { listMenuCreator } from '../build';

const ListMenu = listMenuCreator(2);

const placeHolderCreator = (menus, text) => () => (
    <div>
        <div>{text}</div>
        <ListMenu routes={menus} indent={true} subheader="Menu" />
    </div>
);

const menuRoutes = [
    {
        label: 'Dashboard',
        helpText: 'Dashboard help text.',
        path: '/',
        icon: 'view-dashboard',
        component: placeHolderCreator(menuRoutes, 'Dashboard')
    },
    {
        label: 'Server',
        icon: 'server-network',
        path: '/server',
        subMenu: [
            {
                label: 'Configuration',
                helpText: 'Configuration help text.',
                icon: 'tune',
                path: '/server/configuration',
                component: placeHolderCreator(menuRoutes, 'Server/Configuration')
            },
            {
                label: 'Features',
                helpText: 'Features help text.',
                icon: 'settings-outline',
                path: '/server/features',
                component: placeHolderCreator(menuRoutes, 'Server/Features')
            }
        ]
    },
    {
        label: 'Applications',
        icon: 'application',
        path: '/app',
        subMenu: [
            {
                label: 'Configuration',
                helpText: 'Features help text.',
                icon: 'tune',
                path: '/app/configuration',
                component: placeHolderCreator(menuRoutes, 'Applications/Configuration')
            },
            {
                label: 'Features',
                helpText: 'Features help text.',
                icon: 'settings-outline',
                path: '/app/features',
                component: placeHolderCreator(menuRoutes, 'Applications/Features')
            }
        ]
    }
];

const hist = createBrowserHistory();

const switchRoutes = (
    <Switch>
        {menuRoutes.map((route, i) => {
            console.log(route);
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

it('renders correctly', () => {
    const tree = renderer.create(<Router history={hist}>{switchRoutes}</Router>).toJSON();
    expect(tree).toMatchSnapshot();
});
