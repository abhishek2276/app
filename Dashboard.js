import React from 'react';
import './Dashboard.css'

export default function Dashboard() {
  return (
    <div>
       <center>
    <center><h2>PROJECT INDEX</h2></center>
    <table >
        <tr >
            <th>S No</th>
            <th>Contents</th>
            <th>Page No</th>
        </tr>
        <tr>
            <td>1</td>
            <td ><a href="Home">Home</a></td>
            <td>1.1 - 1.</td>
        
        </tr>
        <tr>
            <td>2</td>
            <td><a href="TruckOwner">Truck Owner Login</a></td>
            <td>2.1 - 2.</td>
        
        </tr> <tr>
            <td>3</td>
            <td><a href="AgentRegister">Agent Registraion</a></td>
            <td>3.1 - 3.</td>
        
        </tr> <tr>
            <td>4</td>
            <td><a href="AgentInfo">Agent Info</a></td>
            <td>4.1 - 4.</td>
        
        </tr> <tr>
            <td>5</td>
            <td><a href="NewTruck">New Truck Registration</a></td>
            <td>5.1 - 5.</td>
        
        </tr> <tr>
            <td>6</td>
            <td><a href="TruckPost">Truck Posting</a></td>
            <td>6.1 - 6.</td>
        
        </tr> <tr>
            <td>7</td>
            <td><a href="ManageBook">Manage Bookings</a></td>
            <td>7.1 - 7.</td>
        
        </tr> <tr>
            <td>8</td>
            <td><a href="AgentLogin">Agent Login</a></td>
            <td>8.1 - 8.</td>
        
        </tr>
       
    </table>
</center>
    </div>
  )
}
