import React from "react";

function Footer() {
    // Get the current year
    const date = new Date();
    const getYear = date.getFullYear();
    
    return (
        <div>
            <footer>
                <p>Copyright {getYear}</p>
            </footer>
        </div>
    )
}

export default Footer;