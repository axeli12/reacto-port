import React from "react";
import axe from "../images/IMG_0717.jpg"

function About () {
    return (
        <div className="bg-white rounded-md shadow-md p-6 mt-12">
            <h3 className="text-2xl text-gray-800 mb-4"> About Me!</h3>
            <div className="flex flex-col items-center">
                <img 
                src={axe}
                alt="Axel"
                className="w-32 h-32 object-contain mb-4"
                />

                <p className="text-center text-gray-900">
                    Hi my name is Axel Irias I am a software deveoper located in Denver Colorado.
                    I am currently working in construction and I have always have had a passion for bulding things and making them work.
                    Reason for the switch is because coding seems to be more engaging than anything that I have done.

                    <br />

                    Please go to the projects tab to see what I have made in my coding bootcamp!

                    <br />

                    There will be additonal links at the end of the page for other of my socails!

                </p>
                
                
            </div>


        </div>
    )
}

export default About;