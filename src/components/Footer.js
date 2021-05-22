import React from 'react'

const Footer = (props) => {
    const footerText = "©2001–2021 All Rights Reserved. Mailchimp® is a registered trademark of The Rocket Science Group."

    return (
        <div className="footer">
            <p>
                {footerText}
            </p>
            <p>
                <a href="#">Cookie Preferences</a>,
                <a href="#">Privacy</a>, and &nbsp;
                <a href="#">Terms</a>.
            </p>
        </div>
    )
}

export default Footer