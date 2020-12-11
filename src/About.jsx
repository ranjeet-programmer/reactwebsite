import React from "react";
import Web from "../src/Images/about.jpg";
import Common from "./Common";

function About()
{
    return (<>
                <Common  
                    name="Welcome to About Page" 
                    imgsrc={Web} 
                    visit="/contact" 
                    btnName="Contact Now"/>
            </>)
}

export default About;