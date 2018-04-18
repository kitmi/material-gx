import { appPath } from "../../../utils/mowa"
import { transition, containerFluid, $vBox, $hBox } from "../general"

export default (drawerWidth, drawerCollapsedWidth) => theme => ({
    root: {
        position: "relative",
        width: "100%",
        height: "100vh",
        ...$hBox(),
        "&:after": {
            display: "table",
            clear: "both",
            content: '" "'
        }
    },
    drawerPaper: {
        position: "relative",
        width: drawerWidth,
        ...transition,
        transitionProperty: "top, bottom, width",
        transitionDuration: ".2s, .2s, .35s",
        transitionTimingFunction: "linear, linear, ease",
        [theme.breakpoints.down("sm")]: {
            transform: `translate3d(${drawerWidth}px, 0, 0)`
        }
    },
    drawerPaperCollapsed: {
        width: drawerCollapsedWidth + "px!important"
    },
    mainPanel: {
        ...transition,
        transitionProperty: "top, bottom, width",
        transitionDuration: ".2s, .2s, .35s",
        transitionTimingFunction: "linear, linear, ease",
        [theme.breakpoints.up("md")]: {
            width: `calc(100% - ${drawerWidth}px)`
        },
        overflow: "auto",
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        maxHeight: "100%",
        ...$vBox()
    },
    toolbar: theme.mixins.toolbar,
    content: {
        height: "100%"
    },
    container: {
        ...containerFluid
    },
    mainPanelSidebarMini: {
        [theme.breakpoints.up("md")]: {
            width: `calc(100% - ${drawerCollapsedWidth}px)`
        }
    }
})
