import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'material-ui/styles/withStyles';
import cx from 'classnames';
import $holyGrailStyles from '../assets/jss/layouts/holyGrailStyles';

function HolyGrail(props) {
    const { classes, header, left, content, right, footer } = props;

    return (
        <div className={classes.root}>
            <div className={classes.headerFooter}>{header}</div>
            <div className={classes.body}>
                <div className={classes.content}>{content}</div>
                <div className={cx(classes.left, classes.side)}>{left}</div>
                <div className={classes.side}>{right}</div>
            </div>
            <div className={classes.headerFooter}>{footer}</div>
        </div>
    );
}

HolyGrail.propTypes = {
    classes: PropTypes.object.isRequired,
    header: PropTypes.node.isRequired,
    left: PropTypes.node.isRequired,
    content: PropTypes.node.isRequired,
    right: PropTypes.node.isRequired,
    footer: PropTypes.node.isRequired
};

/**
 * Create a HolyGrail layout, i.e. frame with two sidebars on the left and right
 * @param sideWidth
 */
export default sideWidth => withStyles($holyGrailStyles(sideWidth))(HolyGrail);
