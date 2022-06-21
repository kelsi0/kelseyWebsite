import React from 'react';
import Field from "../Common/Field";
import { withFormik } from 'formik';
import * as Yup from 'yup';

const fields = {
    sections: [
        [
            {name :'name', elementName: 'input', type: 'text', placeholder: 'Your name'},
            {name :'email', elementName: 'input', type: 'email', placeholder: 'Your email'},
            {name :'phone', elementName: 'input', type: 'text', placeholder: 'Your phone number'},
        ],
        [
            {name :'message', elementName: 'textarea', type: 'text', placeholder: 'Type your message'}
        ]
    ]
}

const Contact = () => {
        return(
        <section className="page-section" id="contact">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Contact Us</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <form id="contactForm" name="sentMessage" novalidate="novalidate" onSubmit={this.props.handleSubmit}>
                    <div className="row align-items-stretch mb-5">                                
                            {fields.sections.map((section, sectionIndex) => {
                                console.log("rendering section", sectionIndex, "with", section);
                                return (
                                    <div className="col-md-6" key={sectionIndex}>
                                        {section.map((field, i) => {
                                            return <Field 
                                                        {...field} 
                                                        key={i}
                                                        value={this.props.values[field.name]}
                                                        name={field.name}
                                                        onChange={this.props.handleChange}
                                                        onBlur={this.props.handleBlur}
                                                        touched={(this.props.touched[field.name])}
                                                        errors={this.props.errors[field.name]}
                                                    />
                                        })}
                                    
                                    </div>
                                )
                            })}
                    </div>
                    <div className="text-center">
                        <div id="success"></div>
                        <button className="btn btn-primary btn-xl text-uppercase" 
                        id="sendMessageButton" 
                        type="submit"
                        >Send Message</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default withFormik({
    mapPropsToValues:  () => ({
        name: '',
        email: '',
        phone: '',
        message: '',
    }),
    validationSchema: Yup.object().shape({
        name: Yup.string().min(3, 'More than this please').required('You must give us your name.'),
        email: Yup.string().email('not a valid email').required('Give'),
        phone: Yup.string().min(10, 'More numers').max(15, 'Your num too long').required('Need num mate'),
        message: Yup.string().min(50, 'longer').required('oi!')
    }),
    handleSubmit: (values, {setSubmitting}) => {
        console.log("VALUES", values);
        alert("You've submitted the form", JSON.stringify(values));
    }
})(Contact);