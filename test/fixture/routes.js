import React from 'react';
import DashboardIcon from 'mdi-material-ui/ViewDashboard';
import ServerIcon from 'mdi-material-ui/ServerNetwork';
import ConfIcon from 'mdi-material-ui/Tune';
import FeaturesIcon from 'mdi-material-ui/SettingsOutline';
import AppIcon from 'mdi-material-ui/Application';

const placeHolderCreator = text => () => <div>{text}</div>;

const routes = [
    {
        label: 'Dashboard',
        helpText: 'Dashboard help text.',
        path: '/dashboard',
        icon: DashboardIcon,
        component: placeHolderCreator('Dashboard')
    },
    {
        label: 'Server',
        icon: ServerIcon,
        path: '/server',
        subMenu: [
            {
                label: 'Configuration',
                helpText: 'Configuration help text.',
                icon: ConfIcon,
                path: '/server/configuration',
                component: placeHolderCreator('Server/Configuration')
            },
            {
                label: 'Features',
                helpText: 'Features help text.',
                icon: FeaturesIcon,
                path: '/server/features',
                component: placeHolderCreator('Server/Features')
            }
        ]
    },
    {
        label: 'Applications',
        icon: AppIcon,
        path: '/app',
        subMenu: [
            {
                label: 'Configuration',
                helpText: 'Features help text.',
                icon: ConfIcon,
                path: '/app/configuration',
                component: placeHolderCreator('Applications/Configuration')
            },
            {
                label: 'Features',
                helpText: 'Features help text.',
                icon: FeaturesIcon,
                path: '/app/features',
                component: placeHolderCreator('Applications/Features')
            }
        ]
    },
    {
        path: '/',
        redirectTo: '/dashboard'
    }
];

export default routes;
