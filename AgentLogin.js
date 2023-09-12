import React from 'react'
import './Home.css';
export default function AgentLogin() {
  return (
    <div>
         <div className="h">
    <div className="sidebar">
    <center><h2>Agent Login</h2></center>
        <button  ><a href="#section1">Content</a></button>
        <button ><a href="#section2">Wire Frames</a></button>
        <button ><a href="#section3">Technologies</a></button>
    </div>
    <div className="content">
        <div className="content-section" id="section1">
          <center>  <h2>Content</h2></center>

               <center><span className="" style={{backgroundColor:'yellow'}}>Agent Log In</span> </center><br></br>
               <p><b style={{float:"right"}}>Page No. 5.1</b><br></br><br></br>

                1.In Agent Login Page
                Need to login Agent ID and Password (Or) Pass Code (Or) Finger Print<br></br><br></br>
                2.In web application Login with Password only<br></br><br></br>
                3.In Android & iOS login with Password (Or) Pass Code (Or) Finger Print<br></br><br></br>
                i.Agent Dash Board<br></br><br></br>
                ii.Once agent was login<br></br><br></br>
                iii.Once candidate was book truck<br></br><br></br>
             There is need from location, to location, date fields<br></br><br></br>
             If suppose candidate was prepaid candidate go to payment page<br></br><br></br>
                 If suppose candidate was post-paid candidate go to booking details page<br></br><br></br>
                <b style={{float:"right"}}>Page No. 5.2</b><br></br><br></br>         
                    <center><span className="" style={{backgroundColor:'yellow'}}>Agent Dash Board</span></center>  <br></br>
                        1. Once agent was login<br></br><br></br>
                2.Once candidate was book truck<br></br><br></br>
                3.There is need from location, to location, date fields<br></br><br></br>
                4.If suppose candidate was prepaid candidate go to payment page<br></br><br></br>
                5.If suppose candidate was post-paid candidate go to booking details page<br></br><br></br>
                <center><span className="" style={{backgroundColor:'yellow'}}>Agent - Bookings</span> </center><br></br><br></br>
                In Agent bookings there is need fields<br></br><br></br>
                1. Change Booking Date<br></br><br></br>
                2. Cancel Booking<br></br><br></br>
                3. Print Booking<br></br><br></br>
                4. Show My Bookings<br></br><br></br>
                5. Truck Tracking<br></br><br></br>
                1. In Change Booking date if suppose agent was need to
                change booking date go to this field and change
                booking date<br></br><br></br>
                2. If suppose agent was goes to cancel bookings go to this
                field need to cancel booking<br></br><br></br>
                3. If suppose agent needs to print bookings go to print
                booking page is here to give Particular date to
                particular date or invoice drop & drag and select and
                go to checking all those details and take prints<br></br><br></br>
                4. Show My Bookings - agent select show my bookings
                Need to show date wise or invoice wise ( drop & drag)
                bookings history<br></br><br></br>
                5. Truck Tracking - In this need Drop & Drag (Registration
                Number) - Visible Booking trucks registrations numbers
                only. Need GPS Tracking<br></br><br></br>
                </p>
        </div>
        <div className="content-section" id="section2">
          <center>  <h2>Wire Frames</h2></center>
            <p>
                <img src="C:\Users\Santhosh\Pictures\Screenshots\Screenshot 2023-08-31 125249.png" width="100%" height="500%"/><br></br>
                <center><b>Agent Login Page</b></center><br></br><br></br>
                <img src="C:\Users\Santhosh\Pictures\Screenshots\Screenshot 2023-09-05 110645.png" width="100%" height="500%"/><br></br><br></br>
                <center><b>Agent Dash Board</b></center><br></br><br></br>
                <img src="C:\Users\Santhosh\Pictures\Screenshots\Screenshot 2023-09-01 093432.png" width="100%" height="500%"/><br></br>
                <center><b>Agent My Bookings Page</b></center><br></br>
                

            </p>
        </div>
        <div className="content-section" id="section3">
            <center>  <h2>Technologies</h2></center>
            <p>Tool :<b>VS Code</b></p>
            <ol>
                <li>HTML</li><br></br>
                <li>CSS</li><br></br>
                <li>Java Script</li>
            </ol>
        </div>
    </div>
</div>
    </div>
  )
}
