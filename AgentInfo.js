import React from 'react'
import './Home.css';
export default function AgentInfo() {
  return (
    <div>
         <div className="h">
    <div className="sidebar">
    <center><h2>Agent Info</h2></center>
        <button  ><a href="#section1">Content</a></button>
        <button ><a href="#section2">Wire Frames</a></button>
        <button ><a href="#section3">Technologies</a></button>
    </div>
    <div className="content">
        <div className="content-section" id="section1">
          <center>  <h2>Content</h2></center>

          <p>
            <center><span className="" style={{ backgroundColor: 'yellow' }}> 4.A.II. Agent Info</span></center> <br></br><br></br>

              <span className="" style={{float:"right"}}>Page No. 4.A.II.1</span> <br></br><br></br>
              Truck owner should check agent details, go to agent page in selecting agent info<br></br><br></br>
              After selecting agent information these details need to be shown<br></br><br></br>
              1. Agent ID (Or) Agent Name - Drop & Drag<br></br><br></br>
              2. Get Info - Button<br></br><br></br>
              Once select Get info Button these details need to be shown<br></br><br></br>
              1. Agent Name<br></br><br></br>
              2. Mobile Number<br></br><br></br>
              3. Agent ID<br></br><br></br>
              4. Agent Type – Here a button is needed to change Prepaid/Postpaid<br></br><br></br>
              5. Agent History - Here a button is needed to see agent bookings related data<br></br><br></br>
              6. Agent Location - Agent Location (Hyderabad)<br></br><br></br>
          </p>
        </div>
        <div className="content-section" id="section2">
          <center>  <h2>Wire Frames</h2></center>
            <p> <img src="C:\Users\Santhosh\Pictures\Screenshots\Screenshot 2023-09-05 103836.png" width="100%" height="500%"/>
            </p>
        </div>
        <div className="content-section" id="section3">
            <center>  <h2>Technologies</h2></center>
            <p> <p>Tool :<b>VS Code</b></p>
            <ol>
                <li>HTML</li><br></br><br></br>
                <li>CSS</li><br></br><br></br>
                <li>Java Script</li>
            </ol>
            </p>
        </div>
    </div>
</div>
    </div>
  )
}
