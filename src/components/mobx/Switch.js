import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import { FormControlLabel, FormControl, FormHelperText } from 'material-ui/Form';
import MuiSwitch from 'material-ui/Switch';

const Switch = ({ field, props }) => {
    const coreCtrl = (
        <MuiSwitch
            id={field.id}
            name={field.name}
            checked={field.value}
            onChange={field.onChange}
            onKeyboardFocus={field.onFocus}
            {...props}
        />
    );

    return (
        <FormControl
            margin="dense"
            error={field.hasError}
            disabled={field.disabled}
            required={field.required}
        >
            {field.label ? <FormControlLabel control={coreCtrl} label={field.label} /> : coreCtrl}
            <FormHelperText>{field.error}</FormHelperText>
        </FormControl>
    );
};

Switch.propTypes = {
    field: PropTypes.object.isRequired,
    props: PropTypes.object
};

export default observer(Switch);
