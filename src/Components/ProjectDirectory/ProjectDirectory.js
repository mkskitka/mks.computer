import React, { useEffect, useState } from 'react';
import ProjectSummary from './ProjectSummary';
import { projects } from '../../Config/projects'
import { useSelector, useDispatch } from 'react-redux';
import { CHANGE_ACTIVE_PROJECT } from "../../Redux/actions";
import "./ProjectDirectory.css"
import $ from "jquery"
import _ from "lodash"
import {useMediaQuery} from "react-responsive";

const projectCategories = ["featured", "installation", "visuals", "∞"]

function ProjectDirectory(props) {

    const dispatch = useDispatch()
    const active_project_id = useSelector(state => state.active_project);
    const route_to_project = useSelector(state => state.route_to_project);
    const [projectCategory, setProjectCategory] = useState(projectCategories[0]);
    const isMobile = useMediaQuery({ maxWidth: 767 })


    useEffect( () => {
        if(route_to_project !== null) {
            projectSelectAnimation(route_to_project)
        }
        }, [route_to_project]
    )


    useEffect(() => {
        setTimeout(function() {
            $(".Project-Directory-Wrapper").fadeIn(1000);
        }, 0)

        return function cleanup() { 
            dispatch({type: CHANGE_ACTIVE_PROJECT, project: null})};
    }, [])

    useEffect( () => {
        if(active_project_id) {
            projectSelectAnimation()
        }
        else {
            animateBackToMenu()
        }
        }, [active_project_id]
    )

const highlight = (id) => {
    $("#Project-Title" + id).addClass("hover")
    $("#Project-Thumbnail" + id).addClass("box_shadow", 3000)
}
const dehighlight = (id) => {
    $("#Project-Title" + id).removeClass("hover")
    $("#Project-Thumbnail" + id).removeClass("box_shadow")
}

    const project_list = projects.map(function(p) {
        if(p.tags.includes(projectCategory)) {
            return (
                <div key={p.id} id={p.id} onMouseOver={(e) => highlight(p.id)} onMouseOut={(e) => dehighlight(p.id)} className={"Project-Link Project-Link" + p.id}
                     onClick={(e) => onFileClick(p.id)}>
                    <div key={p.title} id={"Project-Title" + p.id}
                         className={(p.coming_soon) ? "Inactive-Project-Title" : "Project-Title"}>{p.title.toUpperCase()}</div>
                    {/* <div key={p.title + "_desc"} id={"Project-Description" + p.id}
                         className={"Project-Description"}>{p.description}
                    </div> */}
                    {
                    (p.thumbnail_url) &&
                    <div  style={{position: "relative"}}>
                        <div className="project_thumbnail" id={"Project-Thumbnail" + p.id} style={{
                            backgroundImage: "url(/"+p.project_path + p.thumbnail_url+")",
                            }}>
                        </div>
                    </div>
                    
                    }
                </div>
            );
        }
        else {
            return ""
        }
        });

    return (
        <div style={{position: "relative", height: "100%"}}>
            <div className={"Project-Directory-Wrapper"}>
                <ProjectDir/>
            </div>
            <div className={"Project-Summary-Wrapper"}>
                <ProjectSummary
                    animateBackToMenu={animateBackToMenu}
                />
            </div>
        </div>
    );

    function ProjectCategories() {
        let content = []
        for(let i = 0; i < projectCategories.length; i++) {
            content.push(
                <div id={projectCategories[i]} onClick={() => setProjectCategory(projectCategories[i])} className={(projectCategory === projectCategories[i]) ? "Selected" : null}>
                    {projectCategories[i]}
                </div>
            )
        }
        return content;

    }

    function ProjectDir() {
        return(
            <div className={"Project-Wrapper"}>
                <div className={"Project-Header"}>
                    <div className={"Project-Menu"}>{
                        ProjectCategories()
                    }
                    </div>
                </div>
                {/* <hr class="rounded"></hr> */}
                <div className={"Project-Directory-Content"}>{
                    project_list}
                </div>
            </div>
        );
    }


    function onFileClick(id) {

            dispatch({type: CHANGE_ACTIVE_PROJECT, project: id})
        
    }

    // Move to Project Summary
    function animateBackToMenu() {
        // setProjectCategory("ALL")
        $(".Project-Summary-Wrapper").hide(100);
        $(".Project-Directory-Wrapper").fadeIn(1000);
        $(".Window-projects").css("height", "100%");
    }

    function projectSelectAnimation() {
        $(".Project-Directory-Wrapper").hide(1000);
        $(".Project-Summary-Wrapper").show(1000);
        }
}

export default ProjectDirectory;