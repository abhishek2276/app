import React from 'react'
import './Home.css';

export default function Home() {
    return (

        <div className="h">
            <div className="sidebar">
                <center><h2>Home</h2></center>
                <button  ><a href="#section1">Content</a></button>
                <button ><a href="#section2">Wire Frames</a></button>
                <button ><a href="#section3">Technologies</a></button>
            </div>
            <div className="content">
                <div className="content-section" id="section1">
                    <center>  <h2>Content</h2></center>

                    <p><center><span className="" style={{ backgroundColor: 'yellow' }}>Truck Owner Website</span></center><br></br>
                        In this page it consist of dashboard<br></br><br></br>
                        1.Home<br></br><br></br>
                        2.Truck owner Login<br></br><br></br>
                        3.Agent Login<br></br><br></br>
                        When click made on Truck Owner Login it will show a popup to enter details and allows login<br></br><br></br>
                        1.Phone Number<br></br><br></br>
                        2.Password<br></br><br></br>

                    </p>
                </div>
                <div className="content-section" id="section2">
                    <center>  <h2>Wire Frames</h2></center>
                  <p>  {/* <p> <img src="C:\Users\Santhosh\Pictures\Screenshots\Screenshot 2023-09-05 111826.png" style={{ width: "100%", height: "500%" }}/><br></br> */}
                        <center><b>Dashboard</b></center><br></br><br></br>
                        {/* <img src="C:\Users\Santhosh\Pictures\Screenshots\Screenshot 2023-09-05 111836.png" style={{ width: "100%", height: "500%" }}/><br></br> */}
                        <center><b>Truck Owner Login</b></center><br></br><br></br>


                    </p>
                </div>
                <div className="content-section" id="section3">
                    <center>  <h2>Technologies</h2></center>
                    <p><p>Tool :<b>VS Code</b></p>
                        <ol>
                            <li>HTML</li><br></br>
                            <li>CSS</li><br></br>
                            <li>Java Script</li>
                        </ol>
                    </p>
                </div>
            </div>
        </div>
    )
}
