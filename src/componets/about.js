import React from "react";
import axe from '../images/IMG_0717.jpg'

export default function About() {
    return (
        <div className="container">
            <div className="row" id="aboutMe">
                <div className="col-6">
                    <div className="" style={{fontSize:40}}> About Me

                    </div>
                    <p className="" style={{fontSize: 50}}>
                    Hi my name is Axel Irias I am a software deveoper located in Denver Colorado.
                    I am currently working in construction and I have always have had a passion for bulding things and making them work.
                    Reason for the switch is because coding seems to be more engaging than anything that I have done.

                    <br />

                    Please go to the projects tab to see what I have made in my coding bootcamp!

                    <br />

                    There will be additonal links at the end of the page for other of my socails!


                    </p>
                </div>
                <div className="col d-flex justify-content-center">
                    <img src={axe} className="img-fluid" alt="axe"/>
                </div>

            </div>

        </div>
    )
}