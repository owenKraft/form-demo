import React from 'react'
import AccentImage from '../resources/accent-image.png'

const SidePanel = (props) => {

    return (
        <div className="side-panel">
            <img src={AccentImage} alt="accent image"></img>
            {/* <img src="https://eep.io/images/yzco4xsimv0y/5EbM5DNyaq1mcRL8fLOJZw/cf69ab0f946e5480528bd97cefa012da/Illustration_Content-Manager-My-Logo_App_320x320.png" alt="accent image"></img> */}
        </div>
    )
}

export default SidePanel