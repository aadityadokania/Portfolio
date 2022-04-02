import React from 'react'
import './MyProjects.css'

function MyProjects() {
  return (
    <div className='myprojects'>
        
        <div className="myprojects__header">
            <h2> 🎯 MY PROJECTS</h2>
        </div>
        <div className="myprojects__project-container">
            <div className="myprojects__project-container__card">
                    <img src="https://dummyimage.com/600x400/74c4d6/ffffff&text=Project+1" alt="" />
                    <h3>Project Title</h3>
            </div>

            <div className="myprojects__project-container__card">
                    <img src="https://dummyimage.com/600x400/74c4d6/ffffff&text=Project+2" alt="" />
                    <h3>Project Title</h3>
            </div>


            <div className="myprojects__project-container__card">
                    <img src="https://dummyimage.com/600x400/74c4d6/ffffff&text=Project+3" alt="" />
                    <h3>Project Title</h3>
            </div>
        </div>

        <div className="myprojects__line">
            <div></div>
        </div>

        
    </div>
  )
}

export default MyProjects