import React from 'react';

const Field = ({ elementName, name, type, placeholder, onChange, onBlur, touched, errors }) => {
    return (
        <div className="form-group">
            {elementName === 'input' ?
                <div className="form-group mb-md-0">
                <input 
                    className="form-control" 
                    id={name}
                    type={type} 
                    placeholder={placeholder}
                    required="required" 
                    data-validation-required-message="Please enter your name."
                    name = {name}
                    onChange={onChange}
                    onBlur={onBlur}
                />
                </div>
                :
                <div className="form-group form-group-textarea mb-md-0">
                    <textarea 
                        className="form-control" 
                        id={name}
                        placeholder={placeholder}
                        required="required" 
                        data-validation-required-message="Please enter a message."
                        name = {name}
                        onChange={onChange}
                        onBlur={onBlur}
                    />
                </div> 
            }
            <p className="help-block text-danger">
                {(touched && errors) &&
                    <span>{errors}</span>
                    }
            </p>
        </div>
    );
}

export default Field;