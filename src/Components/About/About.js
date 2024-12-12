import React, {useEffect} from 'react';
import $ from "jquery"
import './About.css';
import {useSelector} from "react-redux";

const bios= [
    "",
    "Mary Kate Skitka -",
    "*",
    "*",
    "",
    `Mary Kate “MK” Skitka is a creative technologist, developer, and  generative artist based in Brooklyn. 
    She began her career as a software engineer working across a wide array of AI research projects. 
    Now, she leverages her years of technical experience 
    to transform spaces utilizing generative visuals and emerging technology. `,
    "*",

    `She holds a MPS from NYU Tisch’s Interactive Telecommunications Program (2023) and 
    a BS in Computer Science and Cognitive Brain Science from Tufts University (2018). 
    Her work takes form as interactive installation, 
    event production, experimental websites, wearable programmable devices, and performance.
    
    She has had her development and design work displayed in The Shed NYC, The Venice Biennale (2024), and Clive Davis Center, 
    and worked with clients such as Volvox Labs, Drunk Elephant, and National Geographic.`, 
     "" ,
     "*",
     `Need a space reimagined or looking to collaborate? - reach out!`,
    "email: mkskitka@gmail.com ",
     "ig: @rgb__tears ",
    "",
    "*",
    "*",
];


function About() {

    const record_open = useSelector(state=> state.record_open);
    
    useEffect(function() {
        // $(".About-Background").height($("#Window-Body-about").height()+200);
        $(".About-Content").fadeOut(0);
        setTimeout(function () {
            $(".About-Content").fadeIn(500);
        }, 100)
    }, []);

    return (
        <div className={"About-Wrapper"} >
            <div className={"About-Background"} />
            <div style ={{display: "none"}}className={"About-Content"} >
                {Bio()}
            </div>
        </div>
    );
}

function Bio() {
    let content = [];
    for(let i=0; i< bios.length; i++) {
        content.push(<div className={"bio"} key={"bio-segment"+i} >{bios[i]}</div>)
    }
    return content;
}

export default About;






