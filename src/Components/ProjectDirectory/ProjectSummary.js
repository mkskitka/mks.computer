import React, { useEffect } from 'react';
import { projects, ASSET_CAPTIONS } from '../../Config/projects'
import { useSelector, useDispatch } from 'react-redux';
import { project_style } from '../../Config/style_templates';
import "./ProjectSummary.css"
import _ from "lodash"
import {useMediaQuery} from "react-responsive";
import { isVideo, isPhoto, makePhotoMobile, makeVideoMobile } from '../../Utils/helper-utils';
import {Icon} from "semantic-ui-react"
import { CHANGE_ACTIVE_PROJECT } from "../../Redux/actions";


function ProjectSummary(props) {

    const dispatch = useDispatch();
    const active_project_id = useSelector(state => state.active_project);
    const active_project = (active_project_id) ? _.find(projects, function(p) { return p.id === active_project_id; }) : null;
    const active_project_title = (active_project) ? active_project.title : null;
    const isMobile = useMediaQuery({ maxWidth: 767 })
    const active_windows = useSelector(state => state.active_windows);


    useEffect(() => {
    }, [])


    let writeup = ""
    let desc = ""
    let date = ""
    let project = _.find(projects, {id:active_project_id})
    let link = (typeof project !== "undefined" && typeof project.link !== "undefined") ? project.link :  null

    if(project) {
        writeup = project.writeup
        desc = undefined
        if(project.date) {
            date = project.date
        }
        if(project.description) {
            desc = project.description
        }
    }

    function BackButton() {
        return (
            <div>
                <div className={"Back-Button-Container"} style={{position: "fixed"}}>
                    <div className={"Back-Button-Click"} style={{top: "0px", position: 'absolute', zIndex: '10'}} onClick={() => {dispatch({type: CHANGE_ACTIVE_PROJECT, project: null})}} />
                    <div className={"Back-Button"} style={{top: "0px", position: "absolute"}}>
                        <svg width="25px" height="25px" >
                            <line x1="0" y1="12.5" x2="25" y2="0" style={{stroke:project_style.borderColor, strokeWidth:'3'}} />
                            <line x1="0" y1="12.5" x2="25" y2="25" style={{stroke:project_style.borderColor, strokeWidth:'3'}} />
                        </svg>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="projSummary" style={{position: "relative"}}>
            <BackButton/>
            <div className={"Project-Header-2"} style={{top: "0px", position: "sticky"}}>
                <div className={"Project-Title-Selected"}>{(active_project_title) ? active_project_title.toUpperCase() : ""}</div>
                <div key={ "_desc"} id={"Project-Description"}
                         className={"Project-Description"}>{(desc) ? desc : ""}</div>
                <div className='Project-Date'>{date}</div>
            </div>
            <div className={"Project-Summary"}>
                <br></br>
                { typeof link === "string" && 
                <div>
                    <a className='link-1' target="_blank" rel="noopener noreferrer" href={link}>
                        <Icon name='linkify' size='small' />{project.link_name}
                    </a>
                </div>
                }
                <div>
                { Array.isArray(link) && 
                    link.map(function(x, i) {
                        return(
                        <div>
                            <a className='link-1' target="_blank" rel="noopener noreferrer" href={x}>
                                <Icon name='linkify' size='small' />{project.link_name[i]}
                            </a>
                        </div>)
                    })
                }
                </div>
                <br></br>
                <div className={"Writeup"} > {
                    writeup
                }</div>
                <br></br>
                {/* start */}
                {
                    isMobile ? 
                    <div className='Gallery'>GALLERY</div> : ""
                }
                {
                    getAssets()
                }
                {/* {
                    active_project_id === "td" ?
                    // <iframe width={"100%"} src="https://www.instagram.com/mk__hacks/"></iframe> 
                    <div>
                    <script async src="//www.instagram.com/embed.js"></script>
                    </div>
                    : ""
                } */}
            </div>
        </div>
    );

    function getAssets() {
        let assets = []
            // let key = active_windows[i]
            // IF PROJECT WINDOW 
            if(active_project) {
                // and is MOBILE
                if(isMobile) {
                    //VIDEOS & IMAGES 
                    assets = assets.concat(active_project.media.map(function(url, x) {
                        return (
                            <div className='gallery-photo-wrapper'>
                                <div className='gallery-photo' key={"asset-" + active_project +x} >
                                    {isVideo(url) ? makeVideoMobile(active_project, url, x) : isPhoto(url) ? makePhotoMobile(active_project, url, x) : null}
                                </div>
                                <div className='caption'>{ASSET_CAPTIONS[url]}</div> 
                            </div>
                            )
 
                    }))
                }
            }
        return assets;
    }

}

export default ProjectSummary;