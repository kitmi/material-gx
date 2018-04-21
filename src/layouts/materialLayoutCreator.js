import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { observer } from 'mobx-react';
import withStyles from 'material-ui/styles/withStyles';

import Sidebar, { SidebarController } from '../components/mobx/Sidebar';

import $materialStyles from '../assets/jss/layouts/materialStyles';

@observer
class Material extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes, content, sidebar, header, footer, sidebarController } = this.props;

        const mainPanel = cx(classes.mainPanel, {
            [classes.mainPanelSidebarMini]: sidebarController.sidebarMini
        });

        return (
            <div className={classes.root}>
                <Sidebar
                    drawerStyle={classes.drawerPaper}
                    drawerCollapsedStyle={classes.drawerPaperCollapsed}
                    controller={sidebarController}
                    content={sidebar}
                />

                <main className={mainPanel}>
                    {header !== undefined && header}
                    <div className={classes.content}>
                        <div className={classes.container}>{content}</div>
                    </div>
                    {footer !== undefined && footer}
                </main>
            </div>
        );
    }
}

Material.propTypes = {
    classes: PropTypes.object.isRequired,
    content: PropTypes.element.isRequired,
    sidebar: PropTypes.element.isRequired,
    sidebarController: PropTypes.instanceOf(SidebarController).isRequired,
    header: PropTypes.element,
    footer: PropTypes.element
};

/**
 * Create a material style layout, i.e. frame with a collapsible sidebar drawer
 * @param {int} sidebarWidth
 * @param {int} sidebarCollapsedWidth
 * @return {Material}
 */
export default (sidebarWidth, sidebarCollapsedWidth) =>
    withStyles($materialStyles(sidebarWidth, sidebarCollapsedWidth))(Material);
