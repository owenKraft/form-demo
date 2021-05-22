import React from 'react'

const FormWrapper = (props) => {
    const headerText = "Welcome to Mailchimp"
    const subheaderText = "Find your people. Engage your customers. Build your brand. Do it all with Mailchimp’s Marketing Platform. Already have an account?"
    const consentText = " I don't want to receive emails about new Mailchimp products, best practices, or special offers. "
    const disclaimerText = "By clicking the \"Sign Up\" button, you are creating a Mailchimp account, and you agree to Mailchimp's Terms of Use and Privacy Policy."

    return (
        <div className="form-wrapper">
            <div className="header-div">
                <h1>
                    {headerText}
                </h1>
                <p>
                    {subheaderText}&nbsp;
                    <a href="#">
                        Log in
                    </a>
                </p>
            </div>

            <form className="sign-up-form">
                <label for="email">Email</label>
                <input name="email" type="email"></input>

                <label for="username">Username</label>
                <input name="username" type="text"></input>

                <div className="password-label-row">
                    <label for="password">Password</label>
                    <span className="show-password-toggle">
                        <i class="far fa-eye"></i>
                        &nbsp;
                        Show
                    </span>
                </div>

                <input name="password" type="password"></input>

                <div className="password-requirements-area">
                    <ul className="ul-1 password-requirements">
                        <li>One lowercase character</li>
                        <li>One uppercase character</li>
                        <li>One number</li>
                    </ul>

                    <ul className="ul-2 password-requirements">
                        <li>One special character</li>
                        <li>8 characters minimum</li>
                    </ul>
                </div>

                <div className="sign-up-affordances">
                    <button type="submit" disabled>Sign Up</button>

                    <div className="consent">
                        <div className="consent-checkbox-wrapper">
                            <input className="consent-checkbox" name="consent" type="checkbox"></input>
                        </div>
                        
                        <label for="conset">{consentText}</label>
                    </div>
                </div>                
            </form>

            <p className="disclaimer-text">
                By clicking the "Sign Up" button, you are creating a Mailchimp account, and you agree to Mailchimp's <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>.
            </p>
        </div>
    )
}

export default FormWrapper