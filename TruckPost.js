import React from 'react'
import './Home.css';
export default function TruckPost() {
  return (
    <div>
         <div className="h">
    <div className="sidebar">
    <center><h2>Truck Posting</h2></center>
        <button  ><a href="#section1">Content</a></button>
        <button ><a href="#section2">Wire Frames</a></button>
        <button ><a href="#section3">Technologies</a></button>
    </div>
    <div className="content">
        <div className="content-section" id="section1">
          <center>  <h2>Content</h2></center>

            <p>
                <center> <span className="" style={{ backgroundColor: "yellow" }}> Posting Page</span></center><br></br>
               <b style={{float:"right"}}>Page No. 4.C.1</b> <br></br><br></br>
               <center> <span className="" style={{ backgroundColor: "yellow" }}> New Truck Posting</span></center><br></br><br></br>
                1. Once the truck owner registration is processed and submitted, it comes to our 
                back end team for verification.<br></br><br></br>
                2. In case of rejection by back end team without proper documentation, message 
                should go to truck owner. No particular document proper. You should submit that 
                document properly.<br></br><br></br>
                3. Our back end team will verify and give OTP permission for truck posting.<br></br><br></br>
                4. After entering the OTP, the truck will be posted<br></br><br></br>
                <center> <span className=""style={{ backgroundColor: "yellow" }}> Existing Truck Posting</span></center><br></br><br></br>
                If the truck owner wants to post the already registered trucks again
                Go to truck posting field. In this field truck owner was select <br></br><br></br>
                There is need to open some fields <br></br><br></br>
                1. Registration Number - Drop & Drag - Available with the truck owner should appear in 
                this field<br></br><br></br>
                2. Search Button<br></br><br></br>
                3. OTP<br></br><br></br>
                4. Posting<br></br><br></br>
            </p>
        </div>
        <div className="content-section" id="section2">
          <center>  <h2>Wire Frames</h2></center>
            <p>  <img src="C:\Users\Santhosh\AppData\Local\Temp\WhatsApp Image 2023-09-01 at 15.45.53.jpeg" width="100%" height="500%"/>
            </p>
        </div>
        <div className="content-section" id="section3">
            <center>  <h2>Technologies</h2></center>
            <p> <p>Tool :<b>VS Code</b></p>
            <ol>
                <li>HTML</li><br></br>
                <li>CSS</li><br></br>
                <li>Java Script</li>
            </ol>
            </p>
        </div>
    </div>
</div>

    </div>
  )
}
