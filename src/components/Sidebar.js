import React from "react"
import PropTypes from "prop-types"
import cx from "classnames"
import Drawer from "material-ui/Drawer"
import Hidden from "material-ui/Hidden"

class Sidebar extends React.PureComponent {
    state = {
        miniActive: true
    }

    onMouseOver = () => this.setState({ miniActive: false })
    onMouseOut = () => this.setState({ miniActive: true })

    constructor(props) {
        super(props)
    }

    render() {
        const {
            drawerStyle,
            drawerCollapsedStyle,
            open,
            handleDrawerToggle,
            miniActive,
            content
        } = this.props

        const drawerPaper = cx(drawerStyle, {
            [drawerCollapsedStyle]: miniActive && this.state.miniActive
        })

        return (
            <div>
                <Hidden mdUp>
                    <Drawer
                        variant="temporary"
                        anchor="left"
                        open={open}
                        classes={{ paper: drawerPaper }}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true // Better open performance on mobile.
                        }}
                    >
                        {content}
                    </Drawer>
                </Hidden>
                <Hidden smDown>
                    <Drawer
                        onMouseOver={this.onMouseOver}
                        onMouseOut={this.onMouseOut}
                        anchor="left"
                        variant="permanent"
                        open
                        classes={{ paper: drawerPaper }}
                    >
                        {content}
                    </Drawer>
                </Hidden>
            </div>
        )
    }
}

Sidebar.propTypes = {
    drawerStyle: PropTypes.string.isRequired,
    drawerCollapsedStyle: PropTypes.string.isRequired,
    open: PropTypes.bool.isRequired,
    handleDrawerToggle: PropTypes.func.isRequired,
    miniActive: PropTypes.bool.isRequired,
    content: PropTypes.element.isRequired
}

export default Sidebar
