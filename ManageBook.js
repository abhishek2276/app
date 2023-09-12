import React from 'react'
import './Home.css';
export default function ManageBook() {
  return (
    <div>
        <div className="h">
    <div className="sidebar">
    <center><h2>Manage Bookings</h2></center>
        <button  ><a href="#section1">Content</a></button>
        <button ><a href="#section2">Wire Frames</a></button>
        <button ><a href="#section3">Technologies</a></button>
    </div>
    <div className="content">
        <div className="content-section" id="section1">
          <center>  <h2>Content</h2></center>

            <p>              <center> <span className=""  style={{ backgroundColor: "yellow" }}> Truck Owner Manage Bookings</span></center><br></br><br></br>



               <b style={{float:"right"}}> Page No. 4.D.1</b><br></br>
                In Manage Bookings <br></br><br></br>
                1. Search By Registration No - In this need Drop & Drag Registration Number
                Registration Date To Till date reports need<br></br><br></br>
                2. Search By Date - In this need Calendar For Selection Particular date to Particular 
                date. For getting all trucks reports need<br></br><br></br>
                3. Trucks Tracking - In this need Drop & Drag (Registration Number) - Visible Booking 
                trucks registrations numbers only<br></br><br></br>
                Need GPS Tracking<br></br><br></br>
                4.Invoice Number - In this need drop & Drag (Invoice Number) - visible all bookings invoice numbers 
            </p>
        </div>
        <div className="content-section" id="section2">
          <center>  <h2>Wire Frames</h2></center>
            <p><img src="C:\Users\Santhosh\Pictures\Screenshots\Screenshot 2023-09-05 123355.png" width="100%" height="500%"/>
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

    </div>
  )
}
