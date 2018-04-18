import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class FormField extends Component {

	state = { value: '', dirty: false, errors: [] }

	hasChanged = e => {
		e.preventDefault();

		const { label, required = false, validator = f => f, onStateChanged = f => f } = this.props;

		const value = e.target.value;
		const isEmpty = value.length === 0;
		const requiredMissing = this.state.dirty && required && isEmpty;

		let errors = [];

		if (requiredMissing) {
			errors = [ ...errors, `${label} is required` ];
		} else if ('function' === typeof validator) {
			try {
				validator(value);
			} catch (e) {
				errors = [ ...errors, e.message ];
			}
		}

		this.setState(({ dirty = false }) => ({ value, errors, dirty: !dirty || dirty }), () => onStateChanged(this.state));
	}

	render() {
		const { value, dirty, errors } = this.state;
		const { type, label, fieldId, placeholder, children } = this.props;

		const hasErrors = errors.length > 0;
		const controlClass = ['form-control', dirty ? hasErrors ? 'is-invalid' : 'is-valid' : '' ].join(' ').trim();

		return (
			<Fragment>
				<div className="form-group px-3 pb-2">
					<div className="d-flex flex-row justify-content-between align-items-center">
						<label htmlFor={fieldId} className="control-label">{label}</label>
						{ hasErrors && <div className="error form-hint font-weight-bold text-right m-0 mb-2">{ errors[0] }</div> }
					</div>
					{children}
					<input type={type} className={controlClass} id={fieldId} placeholder={placeholder} value={value} onChange={this.hasChanged} />
				</div>
			</Fragment>
		);
	}
	
}

FormField.propTypes = {
	type: PropTypes.oneOf(["text", "password"]).isRequired,
	label: PropTypes.string.isRequired,
	fieldId: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	required: PropTypes.bool,
	children: PropTypes.node,
	validator: PropTypes.func,
	onStateChanged: PropTypes.func
};

export default FormField;
