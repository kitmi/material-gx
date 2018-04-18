import React from "react"
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles"

const createTheme = (Component, themeSetting) => {
    const theme = typeof themeSetting === "function" ? themeSetting : createMuiTheme(themeSetting)

    return props => (
        <MuiThemeProvider theme={theme}>
            <Component {...props} />
        </MuiThemeProvider>
    )
}

const clearBaseline = Component => props => (
    <React.Fragment>
        <CssBaseline />
        <Component {...props} />
    </React.Fragment>
)

export { createTheme, clearBaseline }
