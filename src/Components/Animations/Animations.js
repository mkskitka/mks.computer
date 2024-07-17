import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {ADD_DIRECTORY_WINDOW, OPEN_CLOSE_RECORD} from "../../Redux/actions"
import $ from "jquery"
import { useMediaQuery } from 'react-responsive';
let FIRST_ENGAGEMENT = false
let FIRST_ENGAGEMENT_ANIMATION = false


function Animations() {

const animate_right = -50
const timeToLoadDesktop = 0;


const dispatch = useDispatch()

const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

    const active_windows = useSelector(state => state.active_windows);

    $(".Desktop-Icon").mouseup(function (e) {
        // console.log("first engaggemment")
        FIRST_ENGAGEMENT = true;
    });


    useEffect(() => {
        setTimeout(function (){
            // $(".loadingScreen").fadeOut(1000);
            setTimeout(function () {
                onClickCallbacks()
                responsiveCallbacks()
                // console.log("fading in.")
                // $(".Desktop-Content").fadeIn(1000);
            }, 500)
        }, timeToLoadDesktop);
    }, [])

    useEffect(() => {
        if(FIRST_ENGAGEMENT && !FIRST_ENGAGEMENT_ANIMATION && !isTabletOrMobile) {
            console.log('animating')
            FIRST_ENGAGEMENT_ANIMATION= true
            $("#about").animate(
                {
                    right: - animate_right - 10,
                }, 1300, function () {
                    $("#about").animate(
                        {
                            top: "-=140"
                        }
                    )
                }
            )
            $("#record-player").animate(
                {
                    right: -animate_right,
                }, 1500,  function () {
                    $("#record-player").animate(
                        {
                            top: "+=140"
                        }
                    )
                }
            )
            $("#projects").animate(
                {
                    right: -animate_right,
                }, 1700, function () {
                    $("#projects").animate(
                        {
                            top: "+=2"
                        }
                    )
                }
            )
        }
    }, [active_windows])

    function onClickCallbacks() {
        var isDragging = false;
        $(".Desktop-Icon")
            .mousedown(function (e) {
                isDragging = false
                setTimeout(function () {
                    isDragging = true;
                }, 500)
            })
    $(".Desktop-Icon")
        .mouseup(function (e) {
            if (!isDragging) {
                let id = e.target.id;
                if(id === "projects" || id === "terminal" || id === "about"  || id === "resume" ) {
                    console.log("clicked: ", id)
                    dispatch({type: ADD_DIRECTORY_WINDOW, id: id})
                }
                if(id === "record-player") {
                    dispatch({type: OPEN_CLOSE_RECORD})
                }
            }
        });
    }

    function responsiveCallbacks() {
        if (isTabletOrMobile) {
            $("#record-player").css("left", "75%").css("top", "12%")
            $("#about").css("left", "80%").css("top", "50%")
            $("#terminal").css("left", "15%").css("top", "70%")
            $("#projects").css("left", "30%").css("top", "30%")
        }
    }

    return (<div></div>);

}

export default Animations;