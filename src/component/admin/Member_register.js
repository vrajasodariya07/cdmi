import axios  from "axios";
import {  useState } from "react";
import { Navigate } from "react-router-dom";
import Header from "../Header";
// import Logout from "../Logout";

export default function Member_register() {
   var [name,setname]=useState()
   var [email,setemail]=useState()
   var [password,setpassword] = useState()
   var [role,setrole] = useState()
   
    function send_data(){
        Header.post('/admins/register',{
            name:name,
            email:email,
            password:password,
            role:role
        })
        .then(function (response) {
            alert(response.data.status)
            
        })
        .catch(function (error){
            console.log(error);
        });
        
    } 
    return(
        <>
         <div className="h-screen bg-blue-950 pt-32">
                <div className="border-4 w-1/3 mx-auto  bg-blue-950 flex flex-col py-12">
                    <div className=" text-white text-center text-5xl pb-10">Registration Form</div>
                    <input type="text" placeholder="Name" className=" w-1/2 border p-2 rounded-md mx-auto mb-5"  onChange={(e)=>{setname(e.target.value)}}></input>
                   <div className="flex w-1/2 relative mx-auto"> <input placeholder="Email"  className=" p-2 rounded-md w-full mb-5" onChange={(e) => { setemail(e.target.value) }}></input></div>
                    <button type="submit" className="border-2 rounded-md text-white w-44 p-2 m-auto " onClick={() => { send_data() }}>submit</button>
                </div>
            </div>
        <table>
            <tr>
                <td>Name</td>
                <td><input type="text" onChange={(e)=>{setname(e.target.value)}}></input></td>
            </tr>
            <tr>
                <td>Email</td>
                <td><input type="text" onChange={(e)=>{setemail(e.target.value)}}></input></td>
            </tr>
            <tr>
                <td>Password</td>
                <td><input type="text" onChange={(e)=>{setpassword(e.target.value)}}></input></td>
            </tr>
            <tr>
                <td>Role</td>
                <td><select onChange={(e)=>{setrole(e.target.value)}}>
                    <option selected disabled>select</option>
                    <option value="fac">fac</option>
                    <option value="rec">rec</option>
                </select></td>
            </tr>
            <tr>
                <button type="submit" onClick={()=>{send_data()}}>submit</button> 
            </tr>
        </table>
            {/* <Logout/> */}
        </>
       
    )
}