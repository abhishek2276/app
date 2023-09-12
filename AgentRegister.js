import React from 'react'
import './Home.css';
export default function AgentRegister() {
    return (

        <div className="h">
            <div className="sidebar">
                <center><h2>Agent Registration</h2></center>
                <button  ><a href="#section1">Content</a></button>
                <button ><a href="#section2">Wire Frames</a></button>
                <button ><a href="#section3">Technologies</a></button>
            </div>
            <div className="content">
                <div className="content-section" id="section1">
                    <center>  <h2>Content</h2></center>

                    <p>                  <center><span className="" style={{backgroundColor:'yellow'}}> Agent Registration</span></center><br></br><br></br>
                        <b style={{float:'right'}}> Page No. 4.A.1</b><br></br><br></br>
                        Suppose a truck owner needs to register a new agent,
                        The truck owner has choose Agent registration<br></br><br></br>
                        In agent registration page<br></br><br></br>
                        1. Agent type in this field we need Drop & Drag
                        Once Drop there is need to show 3 options <br></br><br></br>
                        A. Prepaid<br></br><br></br>
                        B. Post paid<br></br>
                        C. Prepaid/Post Paid<br></br><br></br>
                        2. Agent Name - In this agent name field needs 0 to 40 letters with space. (in the owner
                        name field - Every first letter Start with Uppercase after that need to lowercase and after
                        every space start with Uppercase )<br></br><br></br>
                        Ex :- Peerugalla Nagendra Varma<br></br><br></br>
                        3. Email Field in this field we need (abcdefghijklmn@gmail.com or @yahoo.com or
                        @rediffmail.com or @hotmail.com)<br></br><br></br>
                        4. Aadhar number field. In this field need 12 numeric only. Every after four numeric we need
                        space. (We are Thinking API For Automatic getting information as per Aadhar Card)<br></br>
                            Ex:- XXXX XXXX XXXX<br></br><br></br>
                            5. Upload Aadhar card - Choose File - Camera - Gallery - Document - File Manager ( size)<br></br><br></br>
                                6. Pan Card Number - In this field Need First 5 Letters Uppercase after 4 numeric and last
                                one upper case. (We are Thinking API For Automatic getting information as per Pan Card)<br></br><br></br>
                                    Ex:- (ABCDE0000A)<br></br><br></br>
                                    7. Upload Pan Card - Choose File - Camera - Gallery - Document - File Manager ( size)
                                    Address<br></br><br></br>
                                    A. Door No - In this field need numeric, special characters and letters<br></br><br></br>
                                    Ex:- 13/11-A (or) 11-11-A (or) 13/11 (or) 13/11-0A (or) 13/11-1234<br></br><br></br>
                                    B. Street - In this field need 40 letters (Every first letter Start with Uppercase after that we
                                    need to lowercase and after every space start with Uppercase)<br></br><br></br>
                                    Ex:- Addagutta Society<br></br><br></br>
                                    <b style={{float:'right'}}> Page No. 4.A.2</b><br></br><br></br>
                                    C. Land Mark - In this field need 40 letters (Every first letter Start with Uppercase after that
                                    we need to lowercase and after every space start with Uppercase)<br></br><br></br>
                                    Ex:- Opp (or) Nearby (or) Beside (or) Front (or) Back<br></br><br></br>
                                    D. Village/ Town - In this field need 40 letters (Every first letter Start with Uppercase after
                                    that we need to lowercase and after every space start with Uppercase)<br></br><br></br>
                                    Ex:- Kukatpally<br></br><br></br>
                                    E. Pincode - In this field need 6 Numeric (000000) after enter Pincode Mandal, District and
                                    State automatically filled<br></br><br></br>
                                    In Mandal, District and State fields need to use API Pincode Gateways<br></br><br></br>
                                    F. Mandal (after enter pincode Mandal field was need to automatically filled)<br></br><br></br>
                                    G. District (after enter pincode District field was need to automatically filled)<br></br><br></br>
                                    H. State (after enter pincode State field was need to automatically filled)<br></br><br></br>
                                    <center> 8. Edit<br></br><br></br>
                                        9. Save<br></br><br></br></center>
                                </p>
                                </div>
                                <div className="content-section" id="section2">
                                    <center>  <h2>Wire Frames</h2></center>
                                    <p>               <img src="C:\Users\Santhosh\Pictures\Screenshots\Screenshot 2023-09-05 104443.png" width="100%" height="500%"></img>
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
                            

                                )
}
