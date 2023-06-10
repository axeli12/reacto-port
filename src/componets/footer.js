import React from "react";
import ghub from '../images/github-mark.png';
import linkdin from '../images/linked-in.png';
import twt from '../images/twitter.jpg';

function Footer(){
    return(
        <footer className="footer">
            <div className="container d-flex justify-content-center align-items-center"> 
                <a href="https://github.com/axeli12">
                    <img src={ghub} alt="github"/>
                </a>
                <a href="https://www.linkedin.com/in/axel-irias-6aa514150/">
                    <img src={linkdin} alt="linkdin" />
                </a>
                <a href="https://twitter.com/axel_irias12">
                    <img src={twt} alt="twitter" />
                </a>
            </div>
        </footer>
    )
}

export default Footer;