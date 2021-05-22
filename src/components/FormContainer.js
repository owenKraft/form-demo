import React from 'react'
import FormWrapper from './FormWrapper'
import FormNav from './FormNav'
import Footer from './Footer'

const FormContainer = (props) => {

    return (
        <div className="form-container">
            <FormNav />
            <FormWrapper />
            <Footer />
        </div>
    )
}

export default FormContainer