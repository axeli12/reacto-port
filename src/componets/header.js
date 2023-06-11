import React from "react";
import Navigation from './navigation';

function Header(props) {
    const { currentPage, handlePageChange } = props;
    return (
        <header className="header">
            <Navigation 
            currentPage={currentPage}
            handlePageChange={handlePageChange}
            />
            <div className="row justify-content-center" style={{fontSize:50}}>
                Axel Irias
            </div>
        </header>
    )
}

export default Header;