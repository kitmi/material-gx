import React from 'react';
import PropTypes from 'prop-types';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';
import cx from 'classnames';
import Drawer from 'material-ui/Drawer';
import Hidden from 'material-ui/Hidden';

class SidebarController {
    @observable sidebarMini = false;
    @observable sidebarOpen = true;

    @action toggleSidebarMini = (value) => { this.sidebarMini = (value !== undefined) ? value : !this.sidebarMini };
    @action toggleSidebarOpen = (value) => { this.sidebarOpen = (value !== undefined) ? value : !this.sidebarOpen };
}

@observer
class Sidebar extends React.Component {
    onClose = () => this.props.controller.toggleSidebarOpen(false);

    render() {
        const {
            drawerStyle,
            drawerCollapsedStyle,
            controller,
            content
        } = this.props;

        const drawerPaper = cx(drawerStyle, {
            [drawerCollapsedStyle]: controller.sidebarMini
        });

        return (
            <div>
                <Hidden mdUp>
                    <Drawer
                        variant="temporary"
                        anchor="right"
                        open={controller.sidebarOpen}
                        classes={{ paper: drawerPaper }}
                        onClose={this.onClose}
                        ModalProps={{
                            keepMounted: true // Better open performance on mobile.
                        }}
                    >
                        {content}
                    </Drawer>
                </Hidden>
                <Hidden smDown>
                    <Drawer
                        anchor="left"
                        variant="permanent"
                        open
                        classes={{ paper: drawerPaper }}
                    >
                        {content}
                    </Drawer>
                </Hidden>
            </div>
        );
    }
}

Sidebar.propTypes = {
    drawerStyle: PropTypes.string.isRequired,
    drawerCollapsedStyle: PropTypes.string.isRequired,
    controller: PropTypes.instanceOf(SidebarController).isRequired,
    content: PropTypes.element.isRequired
};

export default Sidebar;
export { SidebarController };