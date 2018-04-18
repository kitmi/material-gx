import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { observer } from 'mobx-react';
import { NavLink } from "react-router-dom";
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import ListSubheader from 'material-ui/List/ListSubheader';
import Collapse from 'material-ui/transitions/Collapse';

const $styles = maxLevel => theme => {
    let styles = {};

    if (maxLevel !== undefined) {
        //start from level-1, not level-0
        for (let i = 1; i < maxLevel; i++) {
            styles['indent-' + i] = {
                paddingLeft: theme.spacing.unit * 4 * i
            }
        }
    }
};

@observer
class ListMenu extends React.Component {
    setupMenuItems = (menus, level) => menus.map(menu => {
        let indent = this.props.indent;

        let navLinkProps = {};

        if (menu.subMenu) {
            navLinkProps.to = '#';
            navLinkProps.onClick = this.$toggleSubMenu(menu.id);
        } else {
            navLinkProps.to = menu.link;
        }

        let iconName = _.upperFirst( _.camelCase(menu.icon));
        let MenuIcon = require(`mdi-material-ui/${iconName}`);

        return (<ListItem button key={menu.id}>
            <NavLink
                {...navLinkProps}
            >
                <ListItemIcon>
                    <MenuIcon />
                </ListItemIcon>
                <ListItemText inset primary={menu.label} />
            </NavLink>
            {menu.subMenu && <Collapse in={this.state[menu.id]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {this.setupMenuItems(menu.subMenu)}
                </List>
            </Collapse>}
        </ListItem>);
    });

    constructor(props) {
        super(props);
    }

    render() {
        let { classes, menu } = this.props;

        return (<List
            component="nav"
            subheader={<ListSubheader component="div">Menu</ListSubheader>}>
            {this.setupMenuItems(menu)};
        </List>);
    }
}

ListMenu.propTypes = {
    classes: PropTypes.object.isRequired,
    menu: PropTypes.object.isRequired,
    indent: PropTypes.bool
};

export default (maxLevel) => withStyles($styles(maxLevel))(ListMenu);