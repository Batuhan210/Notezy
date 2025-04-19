import React from "react";


function Header() {

    function refreshPage() {
        window.location.reload();
    }
    
    return (
        <header>
            <h1 onClick={refreshPage}
                style={{cursor: "pointer"}}
                >Notezy
            </h1>
        </header>
    );
}
export default Header;
