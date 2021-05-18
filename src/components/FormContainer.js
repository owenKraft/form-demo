import React from 'react'
import Form from './Form'
import FormNav from './FormNav'

const FormContainer = (props) => {

    return (
        <div className="form-container">
            <FormNav />
            <Form />
        </div>
    )
}

export default FormContainer