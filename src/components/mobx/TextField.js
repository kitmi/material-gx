import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import MuiTextField from 'material-ui/TextField';

const TextField = ({ field, props }) => (
    <MuiTextField
        type={field.type || 'text'}
        multiline={'multiline' in field && field.multiline}
        id={field.id}
        name={field.name}
        label={field.label}
        value={field.value}
        placeholder={field.placeholder}
        helperText={field.error}
        error={field.hasError}
        required={field.required}
        disabled={field.disabled}
        onChange={field.onChange}
        onFocus={field.onFocus}
        onBlur={field.onBlur}
        {...props}
    />
);

TextField.propTypes = {
    field: PropTypes.object.isRequired,
    props: PropTypes.object
};

export default observer(TextField);
