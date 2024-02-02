import axios  from "axios";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header";

export default function Edit_member(){
    var [name,setname] =useState()
    var [email,setemail] =useState()
    var [password,setpassword] =useState()
    var id=useParams(id);

    useEffect(()=>{
        Header.get(`/admins/view_fac/${id.id}`,{
      
        })
        .then(function (response) {
            // alert(response.data.status)
            console.log(response.data.data)
            setname(response.data.data.name)
            setemail(response.data.data.email)
            setpassword(response.data.data.password)
            
        })
        .catch(function (error){
            console.log(error);
        });
    

    },[])

    function fac_data(){
        Header.post(`/admins/update/${id.id}`,{
            name:name,
            email:email,
            password:password
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
        <table>
            <tr>
                <td>Name</td>
                <td><input type="text" onChange={(e)=>{setname(e.target.value)}} value={name}></input></td>
            </tr>
            <tr>
                <td>Email</td>
                <td><input type="text" onChange={(e)=>{setemail(e.target.value)}} value={email}></input></td>
            </tr>
            <tr>
                <td>Password</td>
                <td><input type="text" onChange={(e)=>{setpassword(e.target.value)}} value={password}></input></td>
            </tr>
            <tr>
                <button type="submit" onClick={()=>{fac_data()}}>submit</button>
            </tr>
        </table>
        </>
    )
}
