import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { observer } from 'mobx-react';
import { NavLink } from 'react-router-dom';
import cx from 'classnames';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import ListSubheader from 'material-ui/List/ListSubheader';
import Collapse from 'material-ui/transitions/Collapse';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';

import $styles from '../../assets/jss/components/listMenuStyles';

@observer
class ListMenu extends React.Component {
    isActiveRoute = route => {
        return this.props.location.pathname.indexOf(route) > -1 ? true : false;
    };

    $toggleSubMenu = menuId => () => {
        this.setState({ [menuId]: !this.state[menuId] });
    };

    setupMenuItems = (menus, level) =>
        menus.map(menu => {
            if (menu.redirectTo) {
                return null;
            }

            const { classes, indent, path } = this.props;

            const navLinkClasses = cx(classes.itemLink);

            const navLinkProps = {
                className: navLinkClasses
            };

            if (menu.subMenu) {
                navLinkProps.to = '#';
                navLinkProps.onClick = this.$toggleSubMenu(menu.path);
            } else {
                navLinkProps.to = menu.path;
            }

            const MenuIcon = menu.icon;

            const listItemClass = cx(classes.listItem, {
                [classes['indent-' + level]]: indent
            });

            return (
                <React.Fragment key={menu.path}>
                    <ListItem className={listItemClass} button>
                        <NavLink activeClassName={classes.activeLink} {...navLinkProps}>
                            <ListItemIcon>
                                <MenuIcon />
                            </ListItemIcon>
                            <ListItemText inset primary={menu.label} />
                            {menu.subMenu && (
                                <ListItemIcon>
                                    {this.state[menu.path] ? <ExpandLess /> : <ExpandMore />}
                                </ListItemIcon>
                            )}
                        </NavLink>
                    </ListItem>
                    {menu.subMenu && (
                        <Collapse in={this.state[menu.path]} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                {this.setupMenuItems(menu.subMenu, level + 1)}
                            </List>
                        </Collapse>
                    )}
                </React.Fragment>
            );
        });

    state = {};

    render() {
        const { classes, routes, subheader } = this.props;

        return (
            <List
                className={classes.list}
                component="nav"
                subheader={
                    typeof subheader === 'string' ? (
                        <ListSubheader component="div">{subheader}</ListSubheader>
                    ) : (
                        subheader
                    )
                }
            >
                {this.setupMenuItems(routes, 1)}
            </List>
        );
    }
}

ListMenu.propTypes = {
    classes: PropTypes.object.isRequired,
    routes: PropTypes.array.isRequired,
    indent: PropTypes.bool,
    subheader: PropTypes.node
};

export default maxLevel => withStyles($styles(maxLevel))(ListMenu);
