import React from 'react'
import { Skills } from "../../data/Skills"
import { Projects } from "../../data/Projects"
import { Text_1, Text_2, Text_3, Label_1, Label_2 } from "../../data/TextContent"

function Main() {
    return (
        <div className='main'>
            <div className='info'>
                {Text_1}
                <h4>{Text_2}</h4>
                <h6 style={{ paddingTop: "20px" }}>{Text_3}</h6>
            </div>
            <div className='main_skills' id='skills'>
                <h1>{Label_1}</h1>
                <ul>
                    {Skills.map((item,index) => <li key={index} className="skill_item"><h5>{item.name}</h5></li>)}
                </ul>
            </div>
            <div className='main_projects' id='projects'>
                <h1>{Label_2}</h1>
                <h4>{Text_3}</h4>
                <ul className='project_list'>
                    {Projects.map((item,index) => <li key={index}>
                        <div className='project_item'>
                            <h5>{item.title}</h5>
                            <h5>{item.techs}</h5>
                            <img className='gif_wrap' src={item.image} alt='/pic'></img>
                            <h5>{item.overview}</h5>
                        </div>
                    </li>)}
                </ul>
            </div>
        </div>
    )
}

export default Main
