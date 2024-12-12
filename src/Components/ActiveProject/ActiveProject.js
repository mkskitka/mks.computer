import {useEffect} from 'react';
import $ from "jquery"
import {projects} from "../../Config/projects";
import "./ActiveProject.css"
import {useDispatch, useSelector} from "react-redux";
import {
    ADD_DIRECTORY_WINDOW,
    REMOVE_DIRECTORY_WINDOW, 
    CHANGE_ACTIVE_PROJECT
} from "../../Redux/actions";
import { useLocation } from 'react-router-dom';



function ActiveProject(props) {

    const active_project = useSelector(state => state.active_project)
    const dispatch = useDispatch()

    // All this logic should go elsewhere ...
    // removing and adding closable project windows  
    const location = useLocation();
    console.log(location.pathname);

    useEffect(() => {
        setTimeout(() => {
            if(active_project) {
                    dispatch({type: ADD_DIRECTORY_WINDOW, id: active_project})

            }
            else {
                for(let i=0; i<projects.length; i++) {
                    dispatch({type: REMOVE_DIRECTORY_WINDOW, id: projects[i].id})
                }
            }
            console.log("active project changed ", active_project)
       
        }, 500);
    }, [active_project]);

    
    useEffect(() => {
    
        // All this logic should go elsewhere ...
        // removing and adding closable project windows 
        
        setTimeout(() => {

            const regex = /\/projects\/(.*)\/?/;
            const match = location.pathname.match(regex);
            var afterProjects = match ? match[1] : null;
            afterProjects = afterProjects ? afterProjects.replace(/\//g, '') : null;
            console.log(afterProjects);

            if(afterProjects) {
                //open project menu
                dispatch({type: ADD_DIRECTORY_WINDOW, id: "projects"})
                setTimeout(() => {
                    //open project discription
                    dispatch({type: CHANGE_ACTIVE_PROJECT, project: afterProjects})
                }, 500)
                //open project windows 
                dispatch({type: ADD_DIRECTORY_WINDOW, id: afterProjects})
            }
        }, 500);
    
        }, []);

    return (
        ""
    );
}

export default ActiveProject;