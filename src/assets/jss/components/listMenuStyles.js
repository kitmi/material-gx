const $styles = maxLevel => theme => {
    let styles = {
        list: {
            width: '100%',
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper
        },
        listItem: {
            paddingTop: 0,
            paddingBottom: 0
        },
        itemLink: {
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            position: 'relative',
            textDecoration: 'none',
            width: '100%',
            boxSizing: 'border-box',
            textAlign: 'left',
            paddingTop: 12,
            paddingBottom: 12
        },
        activeLink: {}
    };

    if (maxLevel !== undefined) {
        //start from level-1, not level-0
        for (let i = 1; i <= maxLevel; i++) {
            styles['indent-' + i] = {
                paddingLeft: theme.spacing.unit * 2 * i
            };
        }
    }

    return styles;
};

export default $styles;
