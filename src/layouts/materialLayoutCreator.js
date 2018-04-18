import React from "react"
import PropTypes from "prop-types"
import cx from "classnames"
import withStyles from "material-ui/styles/withStyles"

import Sidebar from "../components/Sidebar"

import $materialStyles from "../assets/jss/layouts/materialStyles"

class Material extends React.PureComponent {
    state = {
        mobileOpen: false,
        miniActive: false
    }

    handleDrawerToggle = () => {
        this.setState({ mobileOpen: !this.state.mobileOpen })
    }

    sidebarMinimize = () => {
        this.setState({ miniActive: !this.state.miniActive })
    }

    constructor(props) {
        super(props)
    }

    render() {
        const { classes, content, sidebar, header, footer } = this.props

        const mainPanel = cx(classes.mainPanel, {
            [classes.mainPanelSidebarMini]: this.state.miniActive
        })

        return (
            <div className={classes.root}>
                <Sidebar
                    drawerStyle={classes.drawerPaper}
                    drawerCollapsedStyle={classes.drawerPaperCollapsed}
                    handleDrawerToggle={this.handleDrawerToggle}
                    open={this.state.mobileOpen}
                    miniActive={this.state.miniActive}
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
        )
    }
}

Material.propTypes = {
    classes: PropTypes.object.isRequired,
    content: PropTypes.element.isRequired,
    sidebar: PropTypes.element.isRequired,
    header: PropTypes.element,
    footer: PropTypes.element
}

/**
 * Create a material style layout, i.e. frame with a collapsible sidebar drawer
 * @param {int} sidebarWidth
 * @param {int} sidebarCollapsedWidth
 * @return {Material}
 */
export default (sidebarWidth, sidebarCollapsedWidth) =>
    withStyles($materialStyles(sidebarWidth, sidebarCollapsedWidth))(Material)
