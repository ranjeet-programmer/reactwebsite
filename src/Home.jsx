import React from "react";
import Web from "../src/Images/back.svg";
import Common from "./Common";

function Home()
{
    return (<>
                <Common  
                    name="Grow your business "
                    imgsrc={Web}
                    visit="/service" 
                    btnName="Get Started"/>
            </>)
}

export default Home;